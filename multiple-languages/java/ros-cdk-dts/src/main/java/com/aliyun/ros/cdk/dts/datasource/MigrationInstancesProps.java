package com.aliyun.ros.cdk.dts.datasource;

/**
 * Properties for defining a <code>MigrationInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.045Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.datasource.MigrationInstancesProps")
@software.amazon.jsii.Jsii.Proxy(MigrationInstancesProps.Jsii$Proxy.class)
public interface MigrationInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MigrationInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MigrationInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MigrationInstancesProps> {
        java.lang.Object dtsInstanceId;

        /**
         * Sets the value of {@link MigrationInstancesProps#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: Synchronization instance ID.
         * @return {@code this}
         */
        public Builder dtsInstanceId(java.lang.String dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link MigrationInstancesProps#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: Synchronization instance ID.
         * @return {@code this}
         */
        public Builder dtsInstanceId(com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MigrationInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MigrationInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MigrationInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MigrationInstancesProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.datasource.MigrationInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MigrationInstancesProps.Jsii$Proxy that = (MigrationInstancesProps.Jsii$Proxy) o;

            return this.dtsInstanceId != null ? this.dtsInstanceId.equals(that.dtsInstanceId) : that.dtsInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dtsInstanceId != null ? this.dtsInstanceId.hashCode() : 0;
            return result;
        }
    }
}
