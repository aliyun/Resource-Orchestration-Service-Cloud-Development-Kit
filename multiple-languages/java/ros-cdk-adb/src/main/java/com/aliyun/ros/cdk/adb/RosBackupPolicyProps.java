package com.aliyun.ros.cdk.adb;

/**
 * Properties for defining a <code>RosBackupPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.089Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.RosBackupPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosBackupPolicyProps.Jsii$Proxy.class)
public interface RosBackupPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPreferredBackupTime();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBackupPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackupPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackupPolicyProps> {
        java.lang.Object dbClusterId;
        java.lang.Object preferredBackupPeriod;
        java.lang.Object preferredBackupTime;
        java.lang.Object backupRetentionPeriod;
        java.lang.Object enableBackupLog;
        java.lang.Object logBackupRetentionPeriod;

        /**
         * Sets the value of {@link RosBackupPolicyProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getEnableBackupLog}
         * @param enableBackupLog the value to be set.
         * @return {@code this}
         */
        public Builder enableBackupLog(java.lang.String enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getEnableBackupLog}
         * @param enableBackupLog the value to be set.
         * @return {@code this}
         */
        public Builder enableBackupLog(com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(java.lang.Number logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPolicyProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackupPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackupPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBackupPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackupPolicyProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.Object preferredBackupTime;
        private final java.lang.Object backupRetentionPeriod;
        private final java.lang.Object enableBackupLog;
        private final java.lang.Object logBackupRetentionPeriod;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableBackupLog = software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logBackupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "logBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.preferredBackupPeriod = java.util.Objects.requireNonNull(builder.preferredBackupPeriod, "preferredBackupPeriod is required");
            this.preferredBackupTime = java.util.Objects.requireNonNull(builder.preferredBackupTime, "preferredBackupTime is required");
            this.backupRetentionPeriod = builder.backupRetentionPeriod;
            this.enableBackupLog = builder.enableBackupLog;
            this.logBackupRetentionPeriod = builder.logBackupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
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
        public final java.lang.Object getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getEnableBackupLog() {
            return this.enableBackupLog;
        }

        @Override
        public final java.lang.Object getLogBackupRetentionPeriod() {
            return this.logBackupRetentionPeriod;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("preferredBackupPeriod", om.valueToTree(this.getPreferredBackupPeriod()));
            data.set("preferredBackupTime", om.valueToTree(this.getPreferredBackupTime()));
            if (this.getBackupRetentionPeriod() != null) {
                data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            }
            if (this.getEnableBackupLog() != null) {
                data.set("enableBackupLog", om.valueToTree(this.getEnableBackupLog()));
            }
            if (this.getLogBackupRetentionPeriod() != null) {
                data.set("logBackupRetentionPeriod", om.valueToTree(this.getLogBackupRetentionPeriod()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adb.RosBackupPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackupPolicyProps.Jsii$Proxy that = (RosBackupPolicyProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!preferredBackupPeriod.equals(that.preferredBackupPeriod)) return false;
            if (!preferredBackupTime.equals(that.preferredBackupTime)) return false;
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.enableBackupLog != null ? !this.enableBackupLog.equals(that.enableBackupLog) : that.enableBackupLog != null) return false;
            return this.logBackupRetentionPeriod != null ? this.logBackupRetentionPeriod.equals(that.logBackupRetentionPeriod) : that.logBackupRetentionPeriod == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.preferredBackupPeriod.hashCode());
            result = 31 * result + (this.preferredBackupTime.hashCode());
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.enableBackupLog != null ? this.enableBackupLog.hashCode() : 0);
            result = 31 * result + (this.logBackupRetentionPeriod != null ? this.logBackupRetentionPeriod.hashCode() : 0);
            return result;
        }
    }
}
