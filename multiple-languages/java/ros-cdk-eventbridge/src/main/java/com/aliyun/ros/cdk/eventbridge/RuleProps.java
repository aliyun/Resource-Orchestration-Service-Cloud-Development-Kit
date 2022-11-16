package com.aliyun.ros.cdk.eventbridge;

/**
 * Properties for defining a `ALIYUN::EventBridge::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.068Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RuleProps")
@software.amazon.jsii.Jsii.Proxy(RuleProps.Jsii$Proxy.class)
public interface RuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property eventBusName: The name of the event bus.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventBusName();

    /**
     * Property filterPattern: The event pattern, in the JSON format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFilterPattern();

    /**
     * Property ruleName: The name of the event rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property targets: The event target to which events are delivered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargets();

    /**
     * Property description: The description of the event rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property status: The status of the event rule.
     * <p>
     * Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuleProps> {
        java.lang.Object eventBusName;
        java.lang.Object filterPattern;
        java.lang.Object ruleName;
        java.lang.Object targets;
        java.lang.Object description;
        java.lang.Object status;

        /**
         * Sets the value of {@link RuleProps#getEventBusName}
         * @param eventBusName Property eventBusName: The name of the event bus. This parameter is required.
         * @return {@code this}
         */
        public Builder eventBusName(java.lang.String eventBusName) {
            this.eventBusName = eventBusName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getEventBusName}
         * @param eventBusName Property eventBusName: The name of the event bus. This parameter is required.
         * @return {@code this}
         */
        public Builder eventBusName(com.aliyun.ros.cdk.core.IResolvable eventBusName) {
            this.eventBusName = eventBusName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getFilterPattern}
         * @param filterPattern Property filterPattern: The event pattern, in the JSON format. This parameter is required.
         * @return {@code this}
         */
        public Builder filterPattern(com.aliyun.ros.cdk.core.IResolvable filterPattern) {
            this.filterPattern = filterPattern;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getFilterPattern}
         * @param filterPattern Property filterPattern: The event pattern, in the JSON format. This parameter is required.
         * @return {@code this}
         */
        public Builder filterPattern(java.util.Map<java.lang.String, ? extends java.lang.Object> filterPattern) {
            this.filterPattern = filterPattern;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the event rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the event rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getTargets}
         * @param targets Property targets: The event target to which events are delivered. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getTargets}
         * @param targets Property targets: The event target to which events are delivered. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(java.util.List<? extends java.lang.Object> targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getDescription}
         * @param description Property description: The description of the event rule.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getDescription}
         * @param description Property description: The description of the event rule.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getStatus}
         * @param status Property status: The status of the event rule.
         *               Valid values:
         *               ENABLE: The event rule is enabled. It is the default state of the event rule.
         *               DISABLE: The event rule is disabled.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RuleProps#getStatus}
         * @param status Property status: The status of the event rule.
         *               Valid values:
         *               ENABLE: The event rule is enabled. It is the default state of the event rule.
         *               DISABLE: The event rule is disabled.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProps {
        private final java.lang.Object eventBusName;
        private final java.lang.Object filterPattern;
        private final java.lang.Object ruleName;
        private final java.lang.Object targets;
        private final java.lang.Object description;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.eventBusName = software.amazon.jsii.Kernel.get(this, "eventBusName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filterPattern = software.amazon.jsii.Kernel.get(this, "filterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.eventBusName = java.util.Objects.requireNonNull(builder.eventBusName, "eventBusName is required");
            this.filterPattern = java.util.Objects.requireNonNull(builder.filterPattern, "filterPattern is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.targets = java.util.Objects.requireNonNull(builder.targets, "targets is required");
            this.description = builder.description;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getEventBusName() {
            return this.eventBusName;
        }

        @Override
        public final java.lang.Object getFilterPattern() {
            return this.filterPattern;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getTargets() {
            return this.targets;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("eventBusName", om.valueToTree(this.getEventBusName()));
            data.set("filterPattern", om.valueToTree(this.getFilterPattern()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("targets", om.valueToTree(this.getTargets()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuleProps.Jsii$Proxy that = (RuleProps.Jsii$Proxy) o;

            if (!eventBusName.equals(that.eventBusName)) return false;
            if (!filterPattern.equals(that.filterPattern)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (!targets.equals(that.targets)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.eventBusName.hashCode();
            result = 31 * result + (this.filterPattern.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.targets.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
