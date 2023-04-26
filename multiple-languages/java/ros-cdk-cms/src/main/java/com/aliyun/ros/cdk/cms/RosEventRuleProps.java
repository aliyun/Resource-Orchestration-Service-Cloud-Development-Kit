package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::EventRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.569Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosEventRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosEventRuleProps.Jsii$Proxy.class)
public interface RosEventRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventPattern();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getState() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEventRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEventRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEventRuleProps> {
        java.lang.Object eventPattern;
        java.lang.Object ruleName;
        java.lang.Object description;
        java.lang.Object eventType;
        java.lang.Object groupId;
        java.lang.Object state;

        /**
         * Sets the value of {@link RosEventRuleProps#getEventPattern}
         * @param eventPattern the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventPattern(com.aliyun.ros.cdk.core.IResolvable eventPattern) {
            this.eventPattern = eventPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getEventPattern}
         * @param eventPattern the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventPattern(java.util.List<? extends java.lang.Object> eventPattern) {
            this.eventPattern = eventPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getRuleName}
         * @param ruleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getEventType}
         * @param eventType the value to be set.
         * @return {@code this}
         */
        public Builder eventType(java.lang.String eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getEventType}
         * @param eventType the value to be set.
         * @return {@code this}
         */
        public Builder eventType(com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getState}
         * @param state the value to be set.
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link RosEventRuleProps#getState}
         * @param state the value to be set.
         * @return {@code this}
         */
        public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
            this.state = state;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEventRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEventRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEventRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEventRuleProps {
        private final java.lang.Object eventPattern;
        private final java.lang.Object ruleName;
        private final java.lang.Object description;
        private final java.lang.Object eventType;
        private final java.lang.Object groupId;
        private final java.lang.Object state;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.eventPattern = software.amazon.jsii.Kernel.get(this, "eventPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventType = software.amazon.jsii.Kernel.get(this, "eventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.eventPattern = java.util.Objects.requireNonNull(builder.eventPattern, "eventPattern is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.description = builder.description;
            this.eventType = builder.eventType;
            this.groupId = builder.groupId;
            this.state = builder.state;
        }

        @Override
        public final java.lang.Object getEventPattern() {
            return this.eventPattern;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEventType() {
            return this.eventType;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getState() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosEventRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEventRuleProps.Jsii$Proxy that = (RosEventRuleProps.Jsii$Proxy) o;

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
