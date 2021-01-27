package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a `ALIYUN::HBR::BackupClients`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.021Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.BackupClientsProps")
@software.amazon.jsii.Jsii.Proxy(BackupClientsProps.Jsii$Proxy.class)
public interface BackupClientsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getInstanceIds();

    /**
     * @return a {@link Builder} of {@link BackupClientsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BackupClientsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BackupClientsProps> {
        private java.util.List<java.lang.String> instanceIds;

        /**
         * Sets the value of {@link BackupClientsProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<java.lang.String> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BackupClientsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BackupClientsProps build() {
            return new Jsii$Proxy(instanceIds);
        }
    }

    /**
     * An implementation for {@link BackupClientsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BackupClientsProps {
        private final java.util.List<java.lang.String> instanceIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.util.List<java.lang.String> instanceIds) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(instanceIds, "instanceIds is required");
        }

        @Override
        public final java.util.List<java.lang.String> getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.BackupClientsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BackupClientsProps.Jsii$Proxy that = (BackupClientsProps.Jsii$Proxy) o;

            return this.instanceIds.equals(that.instanceIds);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            return result;
        }
    }
}
