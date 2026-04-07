package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosContainerDefenseRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.626Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosContainerDefenseRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosContainerDefenseRuleProps.Jsii$Proxy.class)
public interface RosContainerDefenseRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleAction() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleSwitch() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhitelist() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhitelistHash() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosContainerDefenseRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosContainerDefenseRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosContainerDefenseRuleProps> {
        java.lang.Object description;
        java.lang.Object ruleAction;
        java.lang.Object ruleId;
        java.lang.Object ruleName;
        java.lang.Object ruleSwitch;
        java.lang.Object ruleType;
        java.lang.Object scope;
        java.lang.Object whitelist;
        java.lang.Object whitelistHash;

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleAction}
         * @param ruleAction the value to be set.
         * @return {@code this}
         */
        public Builder ruleAction(java.lang.Number ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleAction}
         * @param ruleAction the value to be set.
         * @return {@code this}
         */
        public Builder ruleAction(com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleId}
         * @param ruleId the value to be set.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.Number ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleId}
         * @param ruleId the value to be set.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleSwitch}
         * @param ruleSwitch the value to be set.
         * @return {@code this}
         */
        public Builder ruleSwitch(java.lang.Number ruleSwitch) {
            this.ruleSwitch = ruleSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleSwitch}
         * @param ruleSwitch the value to be set.
         * @return {@code this}
         */
        public Builder ruleSwitch(com.aliyun.ros.cdk.core.IResolvable ruleSwitch) {
            this.ruleSwitch = ruleSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleType}
         * @param ruleType the value to be set.
         * @return {@code this}
         */
        public Builder ruleType(java.lang.Number ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getRuleType}
         * @param ruleType the value to be set.
         * @return {@code this}
         */
        public Builder ruleType(com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.ruleType = ruleType;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(com.aliyun.ros.cdk.core.IResolvable scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(java.util.List<? extends java.lang.Object> scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getWhitelist}
         * @param whitelist the value to be set.
         * @return {@code this}
         */
        public Builder whitelist(com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getWhitelist}
         * @param whitelist the value to be set.
         * @return {@code this}
         */
        public Builder whitelist(com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.WhitelistProperty whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getWhitelistHash}
         * @param whitelistHash the value to be set.
         * @return {@code this}
         */
        public Builder whitelistHash(java.lang.String whitelistHash) {
            this.whitelistHash = whitelistHash;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerDefenseRuleProps#getWhitelistHash}
         * @param whitelistHash the value to be set.
         * @return {@code this}
         */
        public Builder whitelistHash(com.aliyun.ros.cdk.core.IResolvable whitelistHash) {
            this.whitelistHash = whitelistHash;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosContainerDefenseRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosContainerDefenseRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosContainerDefenseRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosContainerDefenseRuleProps {
        private final java.lang.Object description;
        private final java.lang.Object ruleAction;
        private final java.lang.Object ruleId;
        private final java.lang.Object ruleName;
        private final java.lang.Object ruleSwitch;
        private final java.lang.Object ruleType;
        private final java.lang.Object scope;
        private final java.lang.Object whitelist;
        private final java.lang.Object whitelistHash;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleAction = software.amazon.jsii.Kernel.get(this, "ruleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleSwitch = software.amazon.jsii.Kernel.get(this, "ruleSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleType = software.amazon.jsii.Kernel.get(this, "ruleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelist = software.amazon.jsii.Kernel.get(this, "whitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelistHash = software.amazon.jsii.Kernel.get(this, "whitelistHash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.ruleAction = builder.ruleAction;
            this.ruleId = builder.ruleId;
            this.ruleName = builder.ruleName;
            this.ruleSwitch = builder.ruleSwitch;
            this.ruleType = builder.ruleType;
            this.scope = builder.scope;
            this.whitelist = builder.whitelist;
            this.whitelistHash = builder.whitelistHash;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRuleAction() {
            return this.ruleAction;
        }

        @Override
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getRuleSwitch() {
            return this.ruleSwitch;
        }

        @Override
        public final java.lang.Object getRuleType() {
            return this.ruleType;
        }

        @Override
        public final java.lang.Object getScope() {
            return this.scope;
        }

        @Override
        public final java.lang.Object getWhitelist() {
            return this.whitelist;
        }

        @Override
        public final java.lang.Object getWhitelistHash() {
            return this.whitelistHash;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRuleAction() != null) {
                data.set("ruleAction", om.valueToTree(this.getRuleAction()));
            }
            if (this.getRuleId() != null) {
                data.set("ruleId", om.valueToTree(this.getRuleId()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getRuleSwitch() != null) {
                data.set("ruleSwitch", om.valueToTree(this.getRuleSwitch()));
            }
            if (this.getRuleType() != null) {
                data.set("ruleType", om.valueToTree(this.getRuleType()));
            }
            if (this.getScope() != null) {
                data.set("scope", om.valueToTree(this.getScope()));
            }
            if (this.getWhitelist() != null) {
                data.set("whitelist", om.valueToTree(this.getWhitelist()));
            }
            if (this.getWhitelistHash() != null) {
                data.set("whitelistHash", om.valueToTree(this.getWhitelistHash()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosContainerDefenseRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosContainerDefenseRuleProps.Jsii$Proxy that = (RosContainerDefenseRuleProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ruleAction != null ? !this.ruleAction.equals(that.ruleAction) : that.ruleAction != null) return false;
            if (this.ruleId != null ? !this.ruleId.equals(that.ruleId) : that.ruleId != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.ruleSwitch != null ? !this.ruleSwitch.equals(that.ruleSwitch) : that.ruleSwitch != null) return false;
            if (this.ruleType != null ? !this.ruleType.equals(that.ruleType) : that.ruleType != null) return false;
            if (this.scope != null ? !this.scope.equals(that.scope) : that.scope != null) return false;
            if (this.whitelist != null ? !this.whitelist.equals(that.whitelist) : that.whitelist != null) return false;
            return this.whitelistHash != null ? this.whitelistHash.equals(that.whitelistHash) : that.whitelistHash == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.ruleAction != null ? this.ruleAction.hashCode() : 0);
            result = 31 * result + (this.ruleId != null ? this.ruleId.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.ruleSwitch != null ? this.ruleSwitch.hashCode() : 0);
            result = 31 * result + (this.ruleType != null ? this.ruleType.hashCode() : 0);
            result = 31 * result + (this.scope != null ? this.scope.hashCode() : 0);
            result = 31 * result + (this.whitelist != null ? this.whitelist.hashCode() : 0);
            result = 31 * result + (this.whitelistHash != null ? this.whitelistHash.hashCode() : 0);
            return result;
        }
    }
}
