package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>RosAlarmContact</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.826Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.RosAlarmContactProps")
@software.amazon.jsii.Jsii.Proxy(RosAlarmContactProps.Jsii$Proxy.class)
public interface RosAlarmContactProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAlarmContactName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAlarmContactProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAlarmContactProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAlarmContactProps> {
        java.lang.Object alarmContactName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosAlarmContactProps#getAlarmContactName}
         * @param alarmContactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmContactName(java.lang.String alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactProps#getAlarmContactName}
         * @param alarmContactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmContactName(com.aliyun.ros.cdk.core.IResolvable alarmContactName) {
            this.alarmContactName = alarmContactName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmContactProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAlarmContactProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAlarmContactProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAlarmContactProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAlarmContactProps {
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
            this.alarmContactName = java.util.Objects.requireNonNull(builder.alarmContactName, "alarmContactName is required");
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

            data.set("alarmContactName", om.valueToTree(this.getAlarmContactName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.RosAlarmContactProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAlarmContactProps.Jsii$Proxy that = (RosAlarmContactProps.Jsii$Proxy) o;

            if (!alarmContactName.equals(that.alarmContactName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.alarmContactName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}