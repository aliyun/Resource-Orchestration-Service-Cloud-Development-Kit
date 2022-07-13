package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.237Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleProps.Jsii$Proxy.class)
public interface RosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleActions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleConditions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDirection() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleProps> {
        java.lang.Object listenerId;
        java.lang.Object priority;
        java.lang.Object ruleActions;
        java.lang.Object ruleConditions;
        java.lang.Object ruleName;
        java.lang.Object direction;

        /**
         * Sets the value of {@link RosRuleProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleActions}
         * @param ruleActions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleActions(com.aliyun.ros.cdk.core.IResolvable ruleActions) {
            this.ruleActions = ruleActions;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleActions}
         * @param ruleActions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleActions(java.util.List<? extends java.lang.Object> ruleActions) {
            this.ruleActions = ruleActions;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleConditions}
         * @param ruleConditions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleConditions(com.aliyun.ros.cdk.core.IResolvable ruleConditions) {
            this.ruleConditions = ruleConditions;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleConditions}
         * @param ruleConditions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleConditions(java.util.List<? extends java.lang.Object> ruleConditions) {
            this.ruleConditions = ruleConditions;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDirection}
         * @param direction the value to be set.
         * @return {@code this}
         */
        public Builder direction(java.lang.String direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getDirection}
         * @param direction the value to be set.
         * @return {@code this}
         */
        public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
            this.direction = direction;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleProps {
        private final java.lang.Object listenerId;
        private final java.lang.Object priority;
        private final java.lang.Object ruleActions;
        private final java.lang.Object ruleConditions;
        private final java.lang.Object ruleName;
        private final java.lang.Object direction;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleActions = software.amazon.jsii.Kernel.get(this, "ruleActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleConditions = software.amazon.jsii.Kernel.get(this, "ruleConditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.ruleActions = java.util.Objects.requireNonNull(builder.ruleActions, "ruleActions is required");
            this.ruleConditions = java.util.Objects.requireNonNull(builder.ruleConditions, "ruleConditions is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.direction = builder.direction;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getRuleActions() {
            return this.ruleActions;
        }

        @Override
        public final java.lang.Object getRuleConditions() {
            return this.ruleConditions;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getDirection() {
            return this.direction;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("listenerId", om.valueToTree(this.getListenerId()));
            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("ruleActions", om.valueToTree(this.getRuleActions()));
            data.set("ruleConditions", om.valueToTree(this.getRuleConditions()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            if (this.getDirection() != null) {
                data.set("direction", om.valueToTree(this.getDirection()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleProps.Jsii$Proxy that = (RosRuleProps.Jsii$Proxy) o;

            if (!listenerId.equals(that.listenerId)) return false;
            if (!priority.equals(that.priority)) return false;
            if (!ruleActions.equals(that.ruleActions)) return false;
            if (!ruleConditions.equals(that.ruleConditions)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            return this.direction != null ? this.direction.equals(that.direction) : that.direction == null;
        }

        @Override
        public final int hashCode() {
            int result = this.listenerId.hashCode();
            result = 31 * result + (this.priority.hashCode());
            result = 31 * result + (this.ruleActions.hashCode());
            result = 31 * result + (this.ruleConditions.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.direction != null ? this.direction.hashCode() : 0);
            return result;
        }
    }
}
