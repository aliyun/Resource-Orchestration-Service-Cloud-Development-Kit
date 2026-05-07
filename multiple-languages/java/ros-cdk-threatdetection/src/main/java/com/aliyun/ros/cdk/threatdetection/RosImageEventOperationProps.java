package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosImageEventOperation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.734Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosImageEventOperationProps")
@software.amazon.jsii.Jsii.Proxy(RosImageEventOperationProps.Jsii$Proxy.class)
public interface RosImageEventOperationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConditions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperationCode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNote() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScenarios() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageEventOperationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageEventOperationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageEventOperationProps> {
        java.lang.Object conditions;
        java.lang.Object eventType;
        java.lang.Object operationCode;
        java.lang.Object eventKey;
        java.lang.Object eventName;
        java.lang.Object note;
        java.lang.Object scenarios;
        java.lang.Object source;

        /**
         * Sets the value of {@link RosImageEventOperationProps#getConditions}
         * @param conditions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder conditions(com.aliyun.ros.cdk.core.IResolvable conditions) {
            this.conditions = conditions;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getConditions}
         * @param conditions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder conditions(java.util.Map<java.lang.String, ? extends java.lang.Object> conditions) {
            this.conditions = conditions;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventType}
         * @param eventType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventType(java.lang.String eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventType}
         * @param eventType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eventType(com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getOperationCode}
         * @param operationCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operationCode(java.lang.String operationCode) {
            this.operationCode = operationCode;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getOperationCode}
         * @param operationCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operationCode(com.aliyun.ros.cdk.core.IResolvable operationCode) {
            this.operationCode = operationCode;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventKey}
         * @param eventKey the value to be set.
         * @return {@code this}
         */
        public Builder eventKey(java.lang.String eventKey) {
            this.eventKey = eventKey;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventKey}
         * @param eventKey the value to be set.
         * @return {@code this}
         */
        public Builder eventKey(com.aliyun.ros.cdk.core.IResolvable eventKey) {
            this.eventKey = eventKey;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventName}
         * @param eventName the value to be set.
         * @return {@code this}
         */
        public Builder eventName(java.lang.String eventName) {
            this.eventName = eventName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getEventName}
         * @param eventName the value to be set.
         * @return {@code this}
         */
        public Builder eventName(com.aliyun.ros.cdk.core.IResolvable eventName) {
            this.eventName = eventName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getNote}
         * @param note the value to be set.
         * @return {@code this}
         */
        public Builder note(java.lang.String note) {
            this.note = note;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getNote}
         * @param note the value to be set.
         * @return {@code this}
         */
        public Builder note(com.aliyun.ros.cdk.core.IResolvable note) {
            this.note = note;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getScenarios}
         * @param scenarios the value to be set.
         * @return {@code this}
         */
        public Builder scenarios(com.aliyun.ros.cdk.core.IResolvable scenarios) {
            this.scenarios = scenarios;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getScenarios}
         * @param scenarios the value to be set.
         * @return {@code this}
         */
        public Builder scenarios(java.util.Map<java.lang.String, ? extends java.lang.Object> scenarios) {
            this.scenarios = scenarios;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link RosImageEventOperationProps#getSource}
         * @param source the value to be set.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageEventOperationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageEventOperationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageEventOperationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageEventOperationProps {
        private final java.lang.Object conditions;
        private final java.lang.Object eventType;
        private final java.lang.Object operationCode;
        private final java.lang.Object eventKey;
        private final java.lang.Object eventName;
        private final java.lang.Object note;
        private final java.lang.Object scenarios;
        private final java.lang.Object source;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.conditions = software.amazon.jsii.Kernel.get(this, "conditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventType = software.amazon.jsii.Kernel.get(this, "eventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationCode = software.amazon.jsii.Kernel.get(this, "operationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventKey = software.amazon.jsii.Kernel.get(this, "eventKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eventName = software.amazon.jsii.Kernel.get(this, "eventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.note = software.amazon.jsii.Kernel.get(this, "note", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scenarios = software.amazon.jsii.Kernel.get(this, "scenarios", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.conditions = java.util.Objects.requireNonNull(builder.conditions, "conditions is required");
            this.eventType = java.util.Objects.requireNonNull(builder.eventType, "eventType is required");
            this.operationCode = java.util.Objects.requireNonNull(builder.operationCode, "operationCode is required");
            this.eventKey = builder.eventKey;
            this.eventName = builder.eventName;
            this.note = builder.note;
            this.scenarios = builder.scenarios;
            this.source = builder.source;
        }

        @Override
        public final java.lang.Object getConditions() {
            return this.conditions;
        }

        @Override
        public final java.lang.Object getEventType() {
            return this.eventType;
        }

        @Override
        public final java.lang.Object getOperationCode() {
            return this.operationCode;
        }

        @Override
        public final java.lang.Object getEventKey() {
            return this.eventKey;
        }

        @Override
        public final java.lang.Object getEventName() {
            return this.eventName;
        }

        @Override
        public final java.lang.Object getNote() {
            return this.note;
        }

        @Override
        public final java.lang.Object getScenarios() {
            return this.scenarios;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("conditions", om.valueToTree(this.getConditions()));
            data.set("eventType", om.valueToTree(this.getEventType()));
            data.set("operationCode", om.valueToTree(this.getOperationCode()));
            if (this.getEventKey() != null) {
                data.set("eventKey", om.valueToTree(this.getEventKey()));
            }
            if (this.getEventName() != null) {
                data.set("eventName", om.valueToTree(this.getEventName()));
            }
            if (this.getNote() != null) {
                data.set("note", om.valueToTree(this.getNote()));
            }
            if (this.getScenarios() != null) {
                data.set("scenarios", om.valueToTree(this.getScenarios()));
            }
            if (this.getSource() != null) {
                data.set("source", om.valueToTree(this.getSource()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosImageEventOperationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageEventOperationProps.Jsii$Proxy that = (RosImageEventOperationProps.Jsii$Proxy) o;

            if (!conditions.equals(that.conditions)) return false;
            if (!eventType.equals(that.eventType)) return false;
            if (!operationCode.equals(that.operationCode)) return false;
            if (this.eventKey != null ? !this.eventKey.equals(that.eventKey) : that.eventKey != null) return false;
            if (this.eventName != null ? !this.eventName.equals(that.eventName) : that.eventName != null) return false;
            if (this.note != null ? !this.note.equals(that.note) : that.note != null) return false;
            if (this.scenarios != null ? !this.scenarios.equals(that.scenarios) : that.scenarios != null) return false;
            return this.source != null ? this.source.equals(that.source) : that.source == null;
        }

        @Override
        public final int hashCode() {
            int result = this.conditions.hashCode();
            result = 31 * result + (this.eventType.hashCode());
            result = 31 * result + (this.operationCode.hashCode());
            result = 31 * result + (this.eventKey != null ? this.eventKey.hashCode() : 0);
            result = 31 * result + (this.eventName != null ? this.eventName.hashCode() : 0);
            result = 31 * result + (this.note != null ? this.note.hashCode() : 0);
            result = 31 * result + (this.scenarios != null ? this.scenarios.hashCode() : 0);
            result = 31 * result + (this.source != null ? this.source.hashCode() : 0);
            return result;
        }
    }
}
