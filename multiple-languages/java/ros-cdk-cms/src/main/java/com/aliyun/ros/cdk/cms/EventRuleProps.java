package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::EventRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.301Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.EventRuleProps")
@software.amazon.jsii.Jsii.Proxy(EventRuleProps.Jsii$Proxy.class)
public interface EventRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventPattern();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRuleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEventType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getState() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EventRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EventRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EventRuleProps> {
        private java.lang.Object eventPattern;
        private java.lang.String ruleName;
        private java.lang.String description;
        private java.lang.String eventType;
        private java.lang.String groupId;
        private java.lang.String state;

        /**
         * Sets the value of {@link EventRuleProps#getEventPattern}
         * @param eventPattern the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventPattern(com.aliyun.ros.cdk.core.IResolvable eventPattern) {
            this.eventPattern = eventPattern;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getEventPattern}
         * @param eventPattern the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventPattern(java.util.List<? extends java.lang.Object> eventPattern) {
            this.eventPattern = eventPattern;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getEventType}
         * @param eventType the value to be set.
         * @return {@code this}
         */
        public Builder eventType(java.lang.String eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link EventRuleProps#getState}
         * @param state the value to be set.
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EventRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EventRuleProps build() {
            return new Jsii$Proxy(eventPattern, ruleName, description, eventType, groupId, state);
        }
    }

    /**
     * An implementation for {@link EventRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EventRuleProps {
        private final java.lang.Object eventPattern;
        private final java.lang.String ruleName;
        private final java.lang.String description;
        private final java.lang.String eventType;
        private final java.lang.String groupId;
        private final java.lang.String state;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.eventPattern = software.amazon.jsii.Kernel.get(this, "eventPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.eventType = software.amazon.jsii.Kernel.get(this, "eventType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object eventPattern, final java.lang.String ruleName, final java.lang.String description, final java.lang.String eventType, final java.lang.String groupId, final java.lang.String state) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.eventPattern = java.util.Objects.requireNonNull(eventPattern, "eventPattern is required");
            this.ruleName = java.util.Objects.requireNonNull(ruleName, "ruleName is required");
            this.description = description;
            this.eventType = eventType;
            this.groupId = groupId;
            this.state = state;
        }

        @Override
        public final java.lang.Object getEventPattern() {
            return this.eventPattern;
        }

        @Override
        public final java.lang.String getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getEventType() {
            return this.eventType;
        }

        @Override
        public final java.lang.String getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.String getState() {
            return this.state;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("eventPattern", om.valueToTree(this.getEventPattern()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEventType() != null) {
                data.set("eventType", om.valueToTree(this.getEventType()));
            }
            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getState() != null) {
                data.set("state", om.valueToTree(this.getState()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.EventRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EventRuleProps.Jsii$Proxy that = (EventRuleProps.Jsii$Proxy) o;

            if (!eventPattern.equals(that.eventPattern)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.eventType != null ? !this.eventType.equals(that.eventType) : that.eventType != null) return false;
            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            return this.state != null ? this.state.equals(that.state) : that.state == null;
        }

        @Override
        public final int hashCode() {
            int result = this.eventPattern.hashCode();
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.eventType != null ? this.eventType.hashCode() : 0);
            result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
            result = 31 * result + (this.state != null ? this.state.hashCode() : 0);
            return result;
        }
    }
}
