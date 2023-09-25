package com.aliyun.ros.cdk.dts.datasource;

/**
 * Properties for defining a <code>DATASOURCE::DTS::MigrationInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.534Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.RosMigrationInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosMigrationInstancesProps.Jsii$Proxy.class)
public interface RosMigrationInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMigrationInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMigrationInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMigrationInstancesProps> {
        java.lang.Object dtsInstanceId;

        /**
         * Sets the value of {@link RosMigrationInstancesProps#getDtsInstanceId}
         * @param dtsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dtsInstanceId(java.lang.String dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationInstancesProps#getDtsInstanceId}
         * @param dtsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dtsInstanceId(com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMigrationInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMigrationInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMigrationInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMigrationInstancesProps {
        private final java.lang.Object dtsInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dtsInstanceId = software.amazon.jsii.Kernel.get(this, "dtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dtsInstanceId = builder.dtsInstanceId;
        }

        @Override
        public final java.lang.Object getDtsInstanceId() {
            return this.dtsInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDtsInstanceId() != null) {
                data.set("dtsInstanceId", om.valueToTree(this.getDtsInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.datasource.RosMigrationInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMigrationInstancesProps.Jsii$Proxy that = (RosMigrationInstancesProps.Jsii$Proxy) o;

            return this.dtsInstanceId != null ? this.dtsInstanceId.equals(that.dtsInstanceId) : that.dtsInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dtsInstanceId != null ? this.dtsInstanceId.hashCode() : 0;
            return result;
        }
    }
}
