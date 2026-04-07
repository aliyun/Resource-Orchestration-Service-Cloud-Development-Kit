package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>ImageEventOperation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.590Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ImageEventOperationProps")
@software.amazon.jsii.Jsii.Proxy(ImageEventOperationProps.Jsii$Proxy.class)
public interface ImageEventOperationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property conditions: The rule conditions.
     * <p>
     * Specify a value in the JSON format. You can specify the following keys:
     * <p>
     * <ul>
     * <li><strong>condition</strong>: the matching condition.</li>
     * <li><strong>type</strong>: the matching type.</li>
     * <li><strong>value</strong>: the matching value.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConditions();

    /**
     * Property eventType: Image Event Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEventType();

    /**
     * Property operationCode: Event Operation Code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperationCode();

    /**
     * Property eventKey: The keyword of the alert item.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventKey() {
        return null;
    }

    /**
     * Property eventName: The name of the alert item.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEventName() {
        return null;
    }

    /**
     * Property note: The remarks that you want to add.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNote() {
        return null;
    }

    /**
     * Property scenarios: The application scope of the rule.
     * <p>
     * The value is in the JSON format. Valid values of keys:
     * type
     * value
     * Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScenarios() {
        return null;
    }

    /**
     * Property source: The source of the whitelist.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>default</strong>: image.</li>
     * <li><strong>agentless</strong>: agentless detection.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImageEventOperationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageEventOperationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageEventOperationProps> {
        java.lang.Object conditions;
        java.lang.Object eventType;
        java.lang.Object operationCode;
        java.lang.Object eventKey;
        java.lang.Object eventName;
        java.lang.Object note;
        java.lang.Object scenarios;
        java.lang.Object source;

        /**
         * Sets the value of {@link ImageEventOperationProps#getConditions}
         * @param conditions Property conditions: The rule conditions. This parameter is required.
         *                   Specify a value in the JSON format. You can specify the following keys:
         *                   <p>
         *                   <ul>
         *                   <li><strong>condition</strong>: the matching condition.</li>
         *                   <li><strong>type</strong>: the matching type.</li>
         *                   <li><strong>value</strong>: the matching value.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder conditions(com.aliyun.ros.cdk.core.IResolvable conditions) {
            this.conditions = conditions;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getConditions}
         * @param conditions Property conditions: The rule conditions. This parameter is required.
         *                   Specify a value in the JSON format. You can specify the following keys:
         *                   <p>
         *                   <ul>
         *                   <li><strong>condition</strong>: the matching condition.</li>
         *                   <li><strong>type</strong>: the matching type.</li>
         *                   <li><strong>value</strong>: the matching value.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder conditions(java.util.Map<java.lang.String, ? extends java.lang.Object> conditions) {
            this.conditions = conditions;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventType}
         * @param eventType Property eventType: Image Event Type. This parameter is required.
         * @return {@code this}
         */
        public Builder eventType(java.lang.String eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventType}
         * @param eventType Property eventType: Image Event Type. This parameter is required.
         * @return {@code this}
         */
        public Builder eventType(com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.eventType = eventType;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getOperationCode}
         * @param operationCode Property operationCode: Event Operation Code. This parameter is required.
         * @return {@code this}
         */
        public Builder operationCode(java.lang.String operationCode) {
            this.operationCode = operationCode;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getOperationCode}
         * @param operationCode Property operationCode: Event Operation Code. This parameter is required.
         * @return {@code this}
         */
        public Builder operationCode(com.aliyun.ros.cdk.core.IResolvable operationCode) {
            this.operationCode = operationCode;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventKey}
         * @param eventKey Property eventKey: The keyword of the alert item.
         * @return {@code this}
         */
        public Builder eventKey(java.lang.String eventKey) {
            this.eventKey = eventKey;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventKey}
         * @param eventKey Property eventKey: The keyword of the alert item.
         * @return {@code this}
         */
        public Builder eventKey(com.aliyun.ros.cdk.core.IResolvable eventKey) {
            this.eventKey = eventKey;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventName}
         * @param eventName Property eventName: The name of the alert item.
         * @return {@code this}
         */
        public Builder eventName(java.lang.String eventName) {
            this.eventName = eventName;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getEventName}
         * @param eventName Property eventName: The name of the alert item.
         * @return {@code this}
         */
        public Builder eventName(com.aliyun.ros.cdk.core.IResolvable eventName) {
            this.eventName = eventName;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getNote}
         * @param note Property note: The remarks that you want to add.
         * @return {@code this}
         */
        public Builder note(java.lang.String note) {
            this.note = note;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getNote}
         * @param note Property note: The remarks that you want to add.
         * @return {@code this}
         */
        public Builder note(com.aliyun.ros.cdk.core.IResolvable note) {
            this.note = note;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getScenarios}
         * @param scenarios Property scenarios: The application scope of the rule.
         *                  The value is in the JSON format. Valid values of keys:
         *                  type
         *                  value
         *                  Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
         * @return {@code this}
         */
        public Builder scenarios(com.aliyun.ros.cdk.core.IResolvable scenarios) {
            this.scenarios = scenarios;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getScenarios}
         * @param scenarios Property scenarios: The application scope of the rule.
         *                  The value is in the JSON format. Valid values of keys:
         *                  type
         *                  value
         *                  Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
         * @return {@code this}
         */
        public Builder scenarios(java.util.Map<java.lang.String, ? extends java.lang.Object> scenarios) {
            this.scenarios = scenarios;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getSource}
         * @param source Property source: The source of the whitelist.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li><strong>default</strong>: image.</li>
         *               <li><strong>agentless</strong>: agentless detection.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder source(java.lang.String source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link ImageEventOperationProps#getSource}
         * @param source Property source: The source of the whitelist.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li><strong>default</strong>: image.</li>
         *               <li><strong>agentless</strong>: agentless detection.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageEventOperationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageEventOperationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageEventOperationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageEventOperationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.ImageEventOperationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageEventOperationProps.Jsii$Proxy that = (ImageEventOperationProps.Jsii$Proxy) o;

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
