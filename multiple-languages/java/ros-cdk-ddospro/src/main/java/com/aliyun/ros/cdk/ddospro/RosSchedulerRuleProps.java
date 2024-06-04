package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosSchedulerRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-schedulerrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.785Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosSchedulerRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosSchedulerRuleProps.Jsii$Proxy.class)
public interface RosSchedulerRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParam() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSchedulerRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSchedulerRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSchedulerRuleProps> {
        java.lang.Object ruleName;
        java.lang.Object rules;
        java.lang.Object ruleType;
        java.lang.Object param;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRuleType}
         * @param ruleType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleType(java.lang.Number ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getRuleType}
         * @param ruleType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleType(com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getParam}
         * @param param the value to be set.
         * @return {@code this}
         */
        public Builder param(java.lang.String param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getParam}
         * @param param the value to be set.
         * @return {@code this}
         */
        public Builder param(com.aliyun.ros.cdk.core.IResolvable param) {
            this.param = param;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSchedulerRuleProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSchedulerRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSchedulerRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSchedulerRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSchedulerRuleProps {
        private final java.lang.Object ruleName;
        private final java.lang.Object rules;
        private final java.lang.Object ruleType;
        private final java.lang.Object param;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleType = software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.param = software.amazon.jsii.Kernel.get(this, "param", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.ruleType = java.util.Objects.requireNonNull(builder.ruleType, "ruleType is required");
            this.param = builder.param;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getRuleType() {
            return this.ruleType;
        }

        @Override
        public final java.lang.Object getParam() {
            return this.param;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("rules", om.valueToTree(this.getRules()));
            data.set("ruleType", om.valueToTree(this.getRuleType()));
            if (this.getParam() != null) {
                data.set("param", om.valueToTree(this.getParam()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosSchedulerRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSchedulerRuleProps.Jsii$Proxy that = (RosSchedulerRuleProps.Jsii$Proxy) o;

            if (!ruleName.equals(that.ruleName)) return false;
            if (!rules.equals(that.rules)) return false;
            if (!ruleType.equals(that.ruleType)) return false;
            if (this.param != null ? !this.param.equals(that.param) : that.param != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ruleName.hashCode();
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.ruleType.hashCode());
            result = 31 * result + (this.param != null ? this.param.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
