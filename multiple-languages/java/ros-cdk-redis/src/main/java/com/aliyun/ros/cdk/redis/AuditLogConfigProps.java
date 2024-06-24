package com.aliyun.ros.cdk.redis;

/**
 * Properties for defining a <code>AuditLogConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-auditlogconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.908Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.AuditLogConfigProps")
@software.amazon.jsii.Jsii.Proxy(AuditLogConfigProps.Jsii$Proxy.class)
public interface AuditLogConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance.
     * <p>
     * You can call the DescribeInstances operation to query the ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property retention: The retention period of audit logs.
     * <p>
     * Valid values: 1 to 365. Unit: days.
     * Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetention();

    /**
     * @return a {@link Builder} of {@link AuditLogConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AuditLogConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AuditLogConfigProps> {
        java.lang.Object instanceId;
        java.lang.Object retention;

        /**
         * Sets the value of {@link AuditLogConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         *                   You can call the DescribeInstances operation to query the ID of the instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AuditLogConfigProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         *                   You can call the DescribeInstances operation to query the ID of the instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AuditLogConfigProps#getRetention}
         * @param retention Property retention: The retention period of audit logs. This parameter is required.
         *                  Valid values: 1 to 365. Unit: days.
         *                  Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
         * @return {@code this}
         */
        public Builder retention(java.lang.Number retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Sets the value of {@link AuditLogConfigProps#getRetention}
         * @param retention Property retention: The retention period of audit logs. This parameter is required.
         *                  Valid values: 1 to 365. Unit: days.
         *                  Note: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region.
         * @return {@code this}
         */
        public Builder retention(com.aliyun.ros.cdk.core.IResolvable retention) {
            this.retention = retention;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AuditLogConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AuditLogConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AuditLogConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuditLogConfigProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object retention;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retention = software.amazon.jsii.Kernel.get(this, "retention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.retention = java.util.Objects.requireNonNull(builder.retention, "retention is required");
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRetention() {
            return this.retention;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("retention", om.valueToTree(this.getRetention()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-redis.AuditLogConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AuditLogConfigProps.Jsii$Proxy that = (AuditLogConfigProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            return this.retention.equals(that.retention);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.retention.hashCode());
            return result;
        }
    }
}
