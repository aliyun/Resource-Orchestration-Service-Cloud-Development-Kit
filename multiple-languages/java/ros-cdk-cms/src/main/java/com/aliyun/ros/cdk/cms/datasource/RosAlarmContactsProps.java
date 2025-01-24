package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>RosAlarmContacts</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:36.214Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.RosAlarmContactsProps")
@software.amazon.jsii.Jsii.Proxy(RosAlarmContactsProps.Jsii$Proxy.class)
public interface RosAlarmContactsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlarmContactName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAlarmContactsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAlarmContactsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAlarmContactsProps> {
        java.lang.Object alarmContactName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosAlarmContactsProps#getAlarmContactName}
         * @param alarmContactName the value to be set.
         * @return {@code this}
         */
        public Builder alarmContactName(java.lang.String alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactsProps#getAlarmContactName}
         * @param alarmContactName the value to be set.
         * @return {@code this}
         */
        public Builder alarmContactName(com.aliyun.ros.cdk.core.IResolvable alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAlarmContactsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAlarmContactsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAlarmContactsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAlarmContactsProps {
        private final java.lang.Object alarmContactName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmContactName = software.amazon.jsii.Kernel.get(this, "alarmContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmContactName = builder.alarmContactName;
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getAlarmContactName() {
            return this.alarmContactName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAlarmContactName() != null) {
                data.set("alarmContactName", om.valueToTree(this.getAlarmContactName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.RosAlarmContactsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAlarmContactsProps.Jsii$Proxy that = (RosAlarmContactsProps.Jsii$Proxy) o;

            if (this.alarmContactName != null ? !this.alarmContactName.equals(that.alarmContactName) : that.alarmContactName != null) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alarmContactName != null ? this.alarmContactName.hashCode() : 0;
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
