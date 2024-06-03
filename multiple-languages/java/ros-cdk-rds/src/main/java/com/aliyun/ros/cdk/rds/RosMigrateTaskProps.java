package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>RosMigrateTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-migratetask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosMigrateTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosMigrateTaskProps.Jsii$Proxy.class)
public interface RosMigrateTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIsOnlineDb();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckDbMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssObjectPositions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssUrls() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMigrateTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMigrateTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMigrateTaskProps> {
        java.lang.Object backupMode;
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;
        java.lang.Object isOnlineDb;
        java.lang.Object checkDbMode;
        java.lang.Object ossObjectPositions;
        java.lang.Object ossUrls;

        /**
         * Sets the value of {@link RosMigrateTaskProps#getBackupMode}
         * @param backupMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backupMode(java.lang.String backupMode) {
            this.backupMode = backupMode;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getBackupMode}
         * @param backupMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backupMode(com.aliyun.ros.cdk.core.IResolvable backupMode) {
            this.backupMode = backupMode;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getDbName}
         * @param dbName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getIsOnlineDb}
         * @param isOnlineDb the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isOnlineDb(java.lang.Boolean isOnlineDb) {
            this.isOnlineDb = isOnlineDb;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getIsOnlineDb}
         * @param isOnlineDb the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder isOnlineDb(com.aliyun.ros.cdk.core.IResolvable isOnlineDb) {
            this.isOnlineDb = isOnlineDb;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getCheckDbMode}
         * @param checkDbMode the value to be set.
         * @return {@code this}
         */
        public Builder checkDbMode(java.lang.String checkDbMode) {
            this.checkDbMode = checkDbMode;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getCheckDbMode}
         * @param checkDbMode the value to be set.
         * @return {@code this}
         */
        public Builder checkDbMode(com.aliyun.ros.cdk.core.IResolvable checkDbMode) {
            this.checkDbMode = checkDbMode;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getOssObjectPositions}
         * @param ossObjectPositions the value to be set.
         * @return {@code this}
         */
        public Builder ossObjectPositions(java.lang.String ossObjectPositions) {
            this.ossObjectPositions = ossObjectPositions;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getOssObjectPositions}
         * @param ossObjectPositions the value to be set.
         * @return {@code this}
         */
        public Builder ossObjectPositions(com.aliyun.ros.cdk.core.IResolvable ossObjectPositions) {
            this.ossObjectPositions = ossObjectPositions;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getOssUrls}
         * @param ossUrls the value to be set.
         * @return {@code this}
         */
        public Builder ossUrls(java.lang.String ossUrls) {
            this.ossUrls = ossUrls;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrateTaskProps#getOssUrls}
         * @param ossUrls the value to be set.
         * @return {@code this}
         */
        public Builder ossUrls(com.aliyun.ros.cdk.core.IResolvable ossUrls) {
            this.ossUrls = ossUrls;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMigrateTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMigrateTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMigrateTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMigrateTaskProps {
        private final java.lang.Object backupMode;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;
        private final java.lang.Object isOnlineDb;
        private final java.lang.Object checkDbMode;
        private final java.lang.Object ossObjectPositions;
        private final java.lang.Object ossUrls;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupMode = software.amazon.jsii.Kernel.get(this, "backupMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isOnlineDb = software.amazon.jsii.Kernel.get(this, "isOnlineDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkDbMode = software.amazon.jsii.Kernel.get(this, "checkDbMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossObjectPositions = software.amazon.jsii.Kernel.get(this, "ossObjectPositions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossUrls = software.amazon.jsii.Kernel.get(this, "ossUrls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupMode = java.util.Objects.requireNonNull(builder.backupMode, "backupMode is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.isOnlineDb = java.util.Objects.requireNonNull(builder.isOnlineDb, "isOnlineDb is required");
            this.checkDbMode = builder.checkDbMode;
            this.ossObjectPositions = builder.ossObjectPositions;
            this.ossUrls = builder.ossUrls;
        }

        @Override
        public final java.lang.Object getBackupMode() {
            return this.backupMode;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getIsOnlineDb() {
            return this.isOnlineDb;
        }

        @Override
        public final java.lang.Object getCheckDbMode() {
            return this.checkDbMode;
        }

        @Override
        public final java.lang.Object getOssObjectPositions() {
            return this.ossObjectPositions;
        }

        @Override
        public final java.lang.Object getOssUrls() {
            return this.ossUrls;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupMode", om.valueToTree(this.getBackupMode()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            data.set("isOnlineDb", om.valueToTree(this.getIsOnlineDb()));
            if (this.getCheckDbMode() != null) {
                data.set("checkDbMode", om.valueToTree(this.getCheckDbMode()));
            }
            if (this.getOssObjectPositions() != null) {
                data.set("ossObjectPositions", om.valueToTree(this.getOssObjectPositions()));
            }
            if (this.getOssUrls() != null) {
                data.set("ossUrls", om.valueToTree(this.getOssUrls()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosMigrateTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMigrateTaskProps.Jsii$Proxy that = (RosMigrateTaskProps.Jsii$Proxy) o;

            if (!backupMode.equals(that.backupMode)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            if (!isOnlineDb.equals(that.isOnlineDb)) return false;
            if (this.checkDbMode != null ? !this.checkDbMode.equals(that.checkDbMode) : that.checkDbMode != null) return false;
            if (this.ossObjectPositions != null ? !this.ossObjectPositions.equals(that.ossObjectPositions) : that.ossObjectPositions != null) return false;
            return this.ossUrls != null ? this.ossUrls.equals(that.ossUrls) : that.ossUrls == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupMode.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.isOnlineDb.hashCode());
            result = 31 * result + (this.checkDbMode != null ? this.checkDbMode.hashCode() : 0);
            result = 31 * result + (this.ossObjectPositions != null ? this.ossObjectPositions.hashCode() : 0);
            result = 31 * result + (this.ossUrls != null ? this.ossUrls.hashCode() : 0);
            return result;
        }
    }
}
