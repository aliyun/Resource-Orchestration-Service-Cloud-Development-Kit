package com.aliyun.ros.cdk.mongodb;

/**
 * Properties for defining a <code>AuditPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.831Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.AuditPolicyProps")
@software.amazon.jsii.Jsii.Proxy(AuditPolicyProps.Jsii$Proxy.class)
public interface AuditPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuditStatus();

    /**
     * Property dbInstanceId: Database Instance Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property storagePeriod: Audit log retention duration.
     * <p>
     * The value range is 1 to 365 days. The default value is 30 days.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePeriod() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AuditPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AuditPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AuditPolicyProps> {
        java.lang.Object auditStatus;
        java.lang.Object dbInstanceId;
        java.lang.Object storagePeriod;

        /**
         * Sets the value of {@link AuditPolicyProps#getAuditStatus}
         * @param auditStatus Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>. This parameter is required.
         * @return {@code this}
         */
        public Builder auditStatus(java.lang.String auditStatus) {
            this.auditStatus = auditStatus;
            return this;
        }

        /**
         * Sets the value of {@link AuditPolicyProps#getAuditStatus}
         * @param auditStatus Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>. This parameter is required.
         * @return {@code this}
         */
        public Builder auditStatus(com.aliyun.ros.cdk.core.IResolvable auditStatus) {
            this.auditStatus = auditStatus;
            return this;
        }

        /**
         * Sets the value of {@link AuditPolicyProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Database Instance Id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AuditPolicyProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Database Instance Id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AuditPolicyProps#getStoragePeriod}
         * @param storagePeriod Property storagePeriod: Audit log retention duration.
         *                      The value range is 1 to 365 days. The default value is 30 days.
         * @return {@code this}
         */
        public Builder storagePeriod(java.lang.Number storagePeriod) {
            this.storagePeriod = storagePeriod;
            return this;
        }

        /**
         * Sets the value of {@link AuditPolicyProps#getStoragePeriod}
         * @param storagePeriod Property storagePeriod: Audit log retention duration.
         *                      The value range is 1 to 365 days. The default value is 30 days.
         * @return {@code this}
         */
        public Builder storagePeriod(com.aliyun.ros.cdk.core.IResolvable storagePeriod) {
            this.storagePeriod = storagePeriod;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AuditPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AuditPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AuditPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuditPolicyProps {
        private final java.lang.Object auditStatus;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object storagePeriod;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.auditStatus = software.amazon.jsii.Kernel.get(this, "auditStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storagePeriod = software.amazon.jsii.Kernel.get(this, "storagePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.auditStatus = java.util.Objects.requireNonNull(builder.auditStatus, "auditStatus is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.storagePeriod = builder.storagePeriod;
        }

        @Override
        public final java.lang.Object getAuditStatus() {
            return this.auditStatus;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getStoragePeriod() {
            return this.storagePeriod;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("auditStatus", om.valueToTree(this.getAuditStatus()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getStoragePeriod() != null) {
                data.set("storagePeriod", om.valueToTree(this.getStoragePeriod()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.AuditPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AuditPolicyProps.Jsii$Proxy that = (AuditPolicyProps.Jsii$Proxy) o;

            if (!auditStatus.equals(that.auditStatus)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            return this.storagePeriod != null ? this.storagePeriod.equals(that.storagePeriod) : that.storagePeriod == null;
        }

        @Override
        public final int hashCode() {
            int result = this.auditStatus.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.storagePeriod != null ? this.storagePeriod.hashCode() : 0);
            return result;
        }
    }
}
