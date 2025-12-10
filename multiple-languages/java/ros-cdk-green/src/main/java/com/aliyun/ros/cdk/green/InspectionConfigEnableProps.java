package com.aliyun.ros.cdk.green;

/**
 * Properties for defining a <code>InspectionConfigEnable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.513Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.green.$Module.class, fqn = "@alicloud/ros-cdk-green.InspectionConfigEnableProps")
@software.amazon.jsii.Jsii.Proxy(InspectionConfigEnableProps.Jsii$Proxy.class)
public interface InspectionConfigEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configType: The type of the configuration to be enabled for inspection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfigType();

    /**
     * Property serviceCode: The code of the service to be enabled for inspection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceCode();

    /**
     * @return a {@link Builder} of {@link InspectionConfigEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InspectionConfigEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InspectionConfigEnableProps> {
        java.lang.Object configType;
        java.lang.Object serviceCode;

        /**
         * Sets the value of {@link InspectionConfigEnableProps#getConfigType}
         * @param configType Property configType: The type of the configuration to be enabled for inspection. This parameter is required.
         * @return {@code this}
         */
        public Builder configType(java.lang.String configType) {
            this.configType = configType;
            return this;
        }

        /**
         * Sets the value of {@link InspectionConfigEnableProps#getConfigType}
         * @param configType Property configType: The type of the configuration to be enabled for inspection. This parameter is required.
         * @return {@code this}
         */
        public Builder configType(com.aliyun.ros.cdk.core.IResolvable configType) {
            this.configType = configType;
            return this;
        }

        /**
         * Sets the value of {@link InspectionConfigEnableProps#getServiceCode}
         * @param serviceCode Property serviceCode: The code of the service to be enabled for inspection. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceCode(java.lang.String serviceCode) {
            this.serviceCode = serviceCode;
            return this;
        }

        /**
         * Sets the value of {@link InspectionConfigEnableProps#getServiceCode}
         * @param serviceCode Property serviceCode: The code of the service to be enabled for inspection. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceCode(com.aliyun.ros.cdk.core.IResolvable serviceCode) {
            this.serviceCode = serviceCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InspectionConfigEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InspectionConfigEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InspectionConfigEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InspectionConfigEnableProps {
        private final java.lang.Object configType;
        private final java.lang.Object serviceCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configType = software.amazon.jsii.Kernel.get(this, "configType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCode = software.amazon.jsii.Kernel.get(this, "serviceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configType = java.util.Objects.requireNonNull(builder.configType, "configType is required");
            this.serviceCode = java.util.Objects.requireNonNull(builder.serviceCode, "serviceCode is required");
        }

        @Override
        public final java.lang.Object getConfigType() {
            return this.configType;
        }

        @Override
        public final java.lang.Object getServiceCode() {
            return this.serviceCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configType", om.valueToTree(this.getConfigType()));
            data.set("serviceCode", om.valueToTree(this.getServiceCode()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-green.InspectionConfigEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InspectionConfigEnableProps.Jsii$Proxy that = (InspectionConfigEnableProps.Jsii$Proxy) o;

            if (!configType.equals(that.configType)) return false;
            return this.serviceCode.equals(that.serviceCode);
        }

        @Override
        public final int hashCode() {
            int result = this.configType.hashCode();
            result = 31 * result + (this.serviceCode.hashCode());
            return result;
        }
    }
}
