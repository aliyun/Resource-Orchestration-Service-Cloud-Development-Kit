package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.983Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.SerialNumberBindingProps")
@software.amazon.jsii.Jsii.Proxy(SerialNumberBindingProps.Jsii$Proxy.class)
public interface SerialNumberBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serialNumber: The serial number (SN) of the SAG device.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSerialNumber();

    /**
     * Property smartAgId: The ID of the SAG instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     * @return a {@link Builder} of {@link SerialNumberBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SerialNumberBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SerialNumberBindingProps> {
        java.lang.Object serialNumber;
        java.lang.Object smartAgId;

        /**
         * Sets the value of {@link SerialNumberBindingProps#getSerialNumber}
         * @param serialNumber Property serialNumber: The serial number (SN) of the SAG device. This parameter is required.
         * @return {@code this}
         */
        public Builder serialNumber(java.lang.String serialNumber) {
            this.serialNumber = serialNumber;
            return this;
        }

        /**
         * Sets the value of {@link SerialNumberBindingProps#getSerialNumber}
         * @param serialNumber Property serialNumber: The serial number (SN) of the SAG device. This parameter is required.
         * @return {@code this}
         */
        public Builder serialNumber(com.aliyun.ros.cdk.core.IResolvable serialNumber) {
            this.serialNumber = serialNumber;
            return this;
        }

        /**
         * Sets the value of {@link SerialNumberBindingProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link SerialNumberBindingProps#getSmartAgId}
         * @param smartAgId Property smartAgId: The ID of the SAG instance. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SerialNumberBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SerialNumberBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SerialNumberBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SerialNumberBindingProps {
        private final java.lang.Object serialNumber;
        private final java.lang.Object smartAgId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serialNumber = software.amazon.jsii.Kernel.get(this, "serialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serialNumber = java.util.Objects.requireNonNull(builder.serialNumber, "serialNumber is required");
            this.smartAgId = java.util.Objects.requireNonNull(builder.smartAgId, "smartAgId is required");
        }

        @Override
        public final java.lang.Object getSerialNumber() {
            return this.serialNumber;
        }

        @Override
        public final java.lang.Object getSmartAgId() {
            return this.smartAgId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serialNumber", om.valueToTree(this.getSerialNumber()));
            data.set("smartAgId", om.valueToTree(this.getSmartAgId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.SerialNumberBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SerialNumberBindingProps.Jsii$Proxy that = (SerialNumberBindingProps.Jsii$Proxy) o;

            if (!serialNumber.equals(that.serialNumber)) return false;
            return this.smartAgId.equals(that.smartAgId);
        }

        @Override
        public final int hashCode() {
            int result = this.serialNumber.hashCode();
            result = 31 * result + (this.smartAgId.hashCode());
            return result;
        }
    }
}
