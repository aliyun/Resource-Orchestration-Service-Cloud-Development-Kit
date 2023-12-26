package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>AlarmContacts</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.448Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.AlarmContactsProps")
@software.amazon.jsii.Jsii.Proxy(AlarmContactsProps.Jsii$Proxy.class)
public interface AlarmContactsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property alarmContactName: The name of the alert contact.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlarmContactName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AlarmContactsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AlarmContactsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AlarmContactsProps> {
        java.lang.Object alarmContactName;

        /**
         * Sets the value of {@link AlarmContactsProps#getAlarmContactName}
         * @param alarmContactName Property alarmContactName: The name of the alert contact.
         * @return {@code this}
         */
        public Builder alarmContactName(java.lang.String alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Sets the value of {@link AlarmContactsProps#getAlarmContactName}
         * @param alarmContactName Property alarmContactName: The name of the alert contact.
         * @return {@code this}
         */
        public Builder alarmContactName(com.aliyun.ros.cdk.core.IResolvable alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AlarmContactsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AlarmContactsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AlarmContactsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlarmContactsProps {
        private final java.lang.Object alarmContactName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmContactName = software.amazon.jsii.Kernel.get(this, "alarmContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmContactName = builder.alarmContactName;
        }

        @Override
        public final java.lang.Object getAlarmContactName() {
            return this.alarmContactName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAlarmContactName() != null) {
                data.set("alarmContactName", om.valueToTree(this.getAlarmContactName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.AlarmContactsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AlarmContactsProps.Jsii$Proxy that = (AlarmContactsProps.Jsii$Proxy) o;

            return this.alarmContactName != null ? this.alarmContactName.equals(that.alarmContactName) : that.alarmContactName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alarmContactName != null ? this.alarmContactName.hashCode() : 0;
            return result;
        }
    }
}
