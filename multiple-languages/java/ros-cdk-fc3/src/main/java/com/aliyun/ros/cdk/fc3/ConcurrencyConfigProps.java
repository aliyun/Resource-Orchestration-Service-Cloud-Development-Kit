package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>ConcurrencyConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.005Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.ConcurrencyConfigProps")
@software.amazon.jsii.Jsii.Proxy(ConcurrencyConfigProps.Jsii$Proxy.class)
public interface ConcurrencyConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property functionName: Function name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     * Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions.
     * <p>
     * Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReservedConcurrency();

    /**
     * @return a {@link Builder} of {@link ConcurrencyConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConcurrencyConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConcurrencyConfigProps> {
        java.lang.Object functionName;
        java.lang.Object reservedConcurrency;

        /**
         * Sets the value of {@link ConcurrencyConfigProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link ConcurrencyConfigProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link ConcurrencyConfigProps#getReservedConcurrency}
         * @param reservedConcurrency Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. This parameter is required.
         *                            Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
         * @return {@code this}
         */
        public Builder reservedConcurrency(java.lang.Number reservedConcurrency) {
            this.reservedConcurrency = reservedConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link ConcurrencyConfigProps#getReservedConcurrency}
         * @param reservedConcurrency Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. This parameter is required.
         *                            Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
         * @return {@code this}
         */
        public Builder reservedConcurrency(com.aliyun.ros.cdk.core.IResolvable reservedConcurrency) {
            this.reservedConcurrency = reservedConcurrency;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConcurrencyConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConcurrencyConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConcurrencyConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConcurrencyConfigProps {
        private final java.lang.Object functionName;
        private final java.lang.Object reservedConcurrency;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reservedConcurrency = software.amazon.jsii.Kernel.get(this, "reservedConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.reservedConcurrency = java.util.Objects.requireNonNull(builder.reservedConcurrency, "reservedConcurrency is required");
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getReservedConcurrency() {
            return this.reservedConcurrency;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("reservedConcurrency", om.valueToTree(this.getReservedConcurrency()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.ConcurrencyConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConcurrencyConfigProps.Jsii$Proxy that = (ConcurrencyConfigProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            return this.reservedConcurrency.equals(that.reservedConcurrency);
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.reservedConcurrency.hashCode());
            return result;
        }
    }
}
