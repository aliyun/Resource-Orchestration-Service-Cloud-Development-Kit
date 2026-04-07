package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a <code>EnterpriseDBClusterBackupPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.606Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps")
@software.amazon.jsii.Jsii.Proxy(EnterpriseDBClusterBackupPolicyProps.Jsii$Proxy.class)
public interface EnterpriseDBClusterBackupPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property backupRetentionPeriod: The number of days for which you can retain the backup data.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupRetentionPeriod();

    /**
     * Property dbInstanceId: The cluster ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.
     * <p>
     * Separate multiple dates with commas (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupPeriod();

    /**
     * Property preferredBackupTime: The backup time window within which the backup task is performed.
     * <p>
     * The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupTime();

    /**
     * @return a {@link Builder} of {@link EnterpriseDBClusterBackupPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnterpriseDBClusterBackupPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnterpriseDBClusterBackupPolicyProps> {
        java.lang.Object backupRetentionPeriod;
        java.lang.Object dbInstanceId;
        java.lang.Object preferredBackupPeriod;
        java.lang.Object preferredBackupTime;

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which you can retain the backup data. This parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The number of days for which you can retain the backup data. This parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. This parameter is required.
         *                              Separate multiple dates with commas (,).
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.lang.String preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. This parameter is required.
         *                              Separate multiple dates with commas (,).
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The backup time window within which the backup task is performed. This parameter is required.
         *                            The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link EnterpriseDBClusterBackupPolicyProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The backup time window within which the backup task is performed. This parameter is required.
         *                            The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnterpriseDBClusterBackupPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnterpriseDBClusterBackupPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnterpriseDBClusterBackupPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnterpriseDBClusterBackupPolicyProps {
        private final java.lang.Object backupRetentionPeriod;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.Object preferredBackupTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupRetentionPeriod = java.util.Objects.requireNonNull(builder.backupRetentionPeriod, "backupRetentionPeriod is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.preferredBackupPeriod = java.util.Objects.requireNonNull(builder.preferredBackupPeriod, "preferredBackupPeriod is required");
            this.preferredBackupTime = java.util.Objects.requireNonNull(builder.preferredBackupTime, "preferredBackupTime is required");
        }

        @Override
        public final java.lang.Object getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getPreferredBackupPeriod() {
            return this.preferredBackupPeriod;
        }

        @Override
        public final java.lang.Object getPreferredBackupTime() {
            return this.preferredBackupTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("preferredBackupPeriod", om.valueToTree(this.getPreferredBackupPeriod()));
            data.set("preferredBackupTime", om.valueToTree(this.getPreferredBackupTime()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnterpriseDBClusterBackupPolicyProps.Jsii$Proxy that = (EnterpriseDBClusterBackupPolicyProps.Jsii$Proxy) o;

            if (!backupRetentionPeriod.equals(that.backupRetentionPeriod)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!preferredBackupPeriod.equals(that.preferredBackupPeriod)) return false;
            return this.preferredBackupTime.equals(that.preferredBackupTime);
        }

        @Override
        public final int hashCode() {
            int result = this.backupRetentionPeriod.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.preferredBackupPeriod.hashCode());
            result = 31 * result + (this.preferredBackupTime.hashCode());
            return result;
        }
    }
}
