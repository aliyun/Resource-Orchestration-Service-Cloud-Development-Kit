package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>ALIYUN::HBR::DbPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.DbPlanProps")
@software.amazon.jsii.Jsii.Proxy(DbPlanProps.Jsii$Proxy.class)
public interface DbPlanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbPlanName: Display name of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbPlanName();

    /**
     * Property hostUuid: Uuid of the host of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostUuid();

    /**
     * Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     * Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultId();

    /**
     * Property continuousPlan: Continuous backup plan schedule.
     * <p>
     * Use {   "type": "continuous" }.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContinuousPlan() {
        return null;
    }

    /**
     * Property cumulativePlan: Cumulative plan schedule, only for mssql.
     * <p>
     * More details see FullPlan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCumulativePlan() {
        return null;
    }

    /**
     * Property fullPlan: Full backup plan schedule.
     * <p>
     * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFullPlan() {
        return null;
    }

    /**
     * Property incPlan: Incremental backup plan schedule.
     * <p>
     * Only for mysql and oracle. More details see FullPlan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncPlan() {
        return null;
    }

    /**
     * Property instanceUuid: Uuid of database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceUuid() {
        return null;
    }

    /**
     * Property logPlan: Log backup plan schedule.More details see FullPlan.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogPlan() {
        return null;
    }

    /**
     * Property maxRateLimit: Max rate limit for backup job,.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRateLimit() {
        return null;
    }

    /**
     * Property maxRetrySeconds: Max retry seconds on network failure.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetrySeconds() {
        return null;
    }

    /**
     * Property options: Backup options in json format, different for each type of database.
     * <p>
     * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     * Property source: Which database instance or database will be backup.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DbPlanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DbPlanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DbPlanProps> {
        java.lang.Object dbPlanName;
        java.lang.Object hostUuid;
        java.lang.Object sourceType;
        java.lang.Object vaultId;
        java.lang.Object continuousPlan;
        java.lang.Object cumulativePlan;
        java.lang.Object fullPlan;
        java.lang.Object incPlan;
        java.lang.Object instanceUuid;
        java.lang.Object logPlan;
        java.lang.Object maxRateLimit;
        java.lang.Object maxRetrySeconds;
        java.lang.Object options;
        java.lang.Object source;

        /**
         * Sets the value of {@link DbPlanProps#getDbPlanName}
         * @param dbPlanName Property dbPlanName: Display name of the backup plan. This parameter is required.
         * @return {@code this}
         */
        public Builder dbPlanName(java.lang.String dbPlanName) {
            this.dbPlanName = dbPlanName;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getDbPlanName}
         * @param dbPlanName Property dbPlanName: Display name of the backup plan. This parameter is required.
         * @return {@code this}
         */
        public Builder dbPlanName(com.aliyun.ros.cdk.core.IResolvable dbPlanName) {
            this.dbPlanName = dbPlanName;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getHostUuid}
         * @param hostUuid Property hostUuid: Uuid of the host of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder hostUuid(java.lang.String hostUuid) {
            this.hostUuid = hostUuid;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getHostUuid}
         * @param hostUuid Property hostUuid: Uuid of the host of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder hostUuid(com.aliyun.ros.cdk.core.IResolvable hostUuid) {
            this.hostUuid = hostUuid;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getSourceType}
         * @param sourceType Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getSourceType}
         * @param sourceType Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getVaultId}
         * @param vaultId Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(java.lang.String vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getVaultId}
         * @param vaultId Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultId(com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.vaultId = vaultId;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getContinuousPlan}
         * @param continuousPlan Property continuousPlan: Continuous backup plan schedule.
         *                       Use {   "type": "continuous" }.
         * @return {@code this}
         */
        public Builder continuousPlan(java.lang.String continuousPlan) {
            this.continuousPlan = continuousPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getContinuousPlan}
         * @param continuousPlan Property continuousPlan: Continuous backup plan schedule.
         *                       Use {   "type": "continuous" }.
         * @return {@code this}
         */
        public Builder continuousPlan(com.aliyun.ros.cdk.core.IResolvable continuousPlan) {
            this.continuousPlan = continuousPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getCumulativePlan}
         * @param cumulativePlan Property cumulativePlan: Cumulative plan schedule, only for mssql.
         *                       More details see FullPlan.
         * @return {@code this}
         */
        public Builder cumulativePlan(java.lang.String cumulativePlan) {
            this.cumulativePlan = cumulativePlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getCumulativePlan}
         * @param cumulativePlan Property cumulativePlan: Cumulative plan schedule, only for mssql.
         *                       More details see FullPlan.
         * @return {@code this}
         */
        public Builder cumulativePlan(com.aliyun.ros.cdk.core.IResolvable cumulativePlan) {
            this.cumulativePlan = cumulativePlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getFullPlan}
         * @param fullPlan Property fullPlan: Full backup plan schedule.
         *                 daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         * @return {@code this}
         */
        public Builder fullPlan(java.lang.String fullPlan) {
            this.fullPlan = fullPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getFullPlan}
         * @param fullPlan Property fullPlan: Full backup plan schedule.
         *                 daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         * @return {@code this}
         */
        public Builder fullPlan(com.aliyun.ros.cdk.core.IResolvable fullPlan) {
            this.fullPlan = fullPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getIncPlan}
         * @param incPlan Property incPlan: Incremental backup plan schedule.
         *                Only for mysql and oracle. More details see FullPlan.
         * @return {@code this}
         */
        public Builder incPlan(java.lang.String incPlan) {
            this.incPlan = incPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getIncPlan}
         * @param incPlan Property incPlan: Incremental backup plan schedule.
         *                Only for mysql and oracle. More details see FullPlan.
         * @return {@code this}
         */
        public Builder incPlan(com.aliyun.ros.cdk.core.IResolvable incPlan) {
            this.incPlan = incPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getInstanceUuid}
         * @param instanceUuid Property instanceUuid: Uuid of database instance.
         * @return {@code this}
         */
        public Builder instanceUuid(java.lang.String instanceUuid) {
            this.instanceUuid = instanceUuid;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getInstanceUuid}
         * @param instanceUuid Property instanceUuid: Uuid of database instance.
         * @return {@code this}
         */
        public Builder instanceUuid(com.aliyun.ros.cdk.core.IResolvable instanceUuid) {
            this.instanceUuid = instanceUuid;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getLogPlan}
         * @param logPlan Property logPlan: Log backup plan schedule.More details see FullPlan.
         * @return {@code this}
         */
        public Builder logPlan(java.lang.String logPlan) {
            this.logPlan = logPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getLogPlan}
         * @param logPlan Property logPlan: Log backup plan schedule.More details see FullPlan.
         * @return {@code this}
         */
        public Builder logPlan(com.aliyun.ros.cdk.core.IResolvable logPlan) {
            this.logPlan = logPlan;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getMaxRateLimit}
         * @param maxRateLimit Property maxRateLimit: Max rate limit for backup job,.
         * @return {@code this}
         */
        public Builder maxRateLimit(java.lang.Number maxRateLimit) {
            this.maxRateLimit = maxRateLimit;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getMaxRateLimit}
         * @param maxRateLimit Property maxRateLimit: Max rate limit for backup job,.
         * @return {@code this}
         */
        public Builder maxRateLimit(com.aliyun.ros.cdk.core.IResolvable maxRateLimit) {
            this.maxRateLimit = maxRateLimit;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getMaxRetrySeconds}
         * @param maxRetrySeconds Property maxRetrySeconds: Max retry seconds on network failure.
         * @return {@code this}
         */
        public Builder maxRetrySeconds(java.lang.Number maxRetrySeconds) {
            this.maxRetrySeconds = maxRetrySeconds;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getMaxRetrySeconds}
         * @param maxRetrySeconds Property maxRetrySeconds: Max retry seconds on network failure.
         * @return {@code this}
         */
        public Builder maxRetrySeconds(com.aliyun.ros.cdk.core.IResolvable maxRetrySeconds) {
            this.maxRetrySeconds = maxRetrySeconds;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getOptions}
         * @param options Property options: Backup options in json format, different for each type of database.
         *                For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getOptions}
         * @param options Property options: Backup options in json format, different for each type of database.
         *                For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getSource}
         * @param source Property source: Which database instance or database will be backup.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link DbPlanProps#getSource}
         * @param source Property source: Which database instance or database will be backup.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.hbr.RosDbPlan.SourceProperty source) {
            this.source = source;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DbPlanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DbPlanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DbPlanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DbPlanProps {
        private final java.lang.Object dbPlanName;
        private final java.lang.Object hostUuid;
        private final java.lang.Object sourceType;
        private final java.lang.Object vaultId;
        private final java.lang.Object continuousPlan;
        private final java.lang.Object cumulativePlan;
        private final java.lang.Object fullPlan;
        private final java.lang.Object incPlan;
        private final java.lang.Object instanceUuid;
        private final java.lang.Object logPlan;
        private final java.lang.Object maxRateLimit;
        private final java.lang.Object maxRetrySeconds;
        private final java.lang.Object options;
        private final java.lang.Object source;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbPlanName = software.amazon.jsii.Kernel.get(this, "dbPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostUuid = software.amazon.jsii.Kernel.get(this, "hostUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultId = software.amazon.jsii.Kernel.get(this, "vaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.continuousPlan = software.amazon.jsii.Kernel.get(this, "continuousPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cumulativePlan = software.amazon.jsii.Kernel.get(this, "cumulativePlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fullPlan = software.amazon.jsii.Kernel.get(this, "fullPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.incPlan = software.amazon.jsii.Kernel.get(this, "incPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceUuid = software.amazon.jsii.Kernel.get(this, "instanceUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logPlan = software.amazon.jsii.Kernel.get(this, "logPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxRateLimit = software.amazon.jsii.Kernel.get(this, "maxRateLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxRetrySeconds = software.amazon.jsii.Kernel.get(this, "maxRetrySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbPlanName = java.util.Objects.requireNonNull(builder.dbPlanName, "dbPlanName is required");
            this.hostUuid = java.util.Objects.requireNonNull(builder.hostUuid, "hostUuid is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.vaultId = java.util.Objects.requireNonNull(builder.vaultId, "vaultId is required");
            this.continuousPlan = builder.continuousPlan;
            this.cumulativePlan = builder.cumulativePlan;
            this.fullPlan = builder.fullPlan;
            this.incPlan = builder.incPlan;
            this.instanceUuid = builder.instanceUuid;
            this.logPlan = builder.logPlan;
            this.maxRateLimit = builder.maxRateLimit;
            this.maxRetrySeconds = builder.maxRetrySeconds;
            this.options = builder.options;
            this.source = builder.source;
        }

        @Override
        public final java.lang.Object getDbPlanName() {
            return this.dbPlanName;
        }

        @Override
        public final java.lang.Object getHostUuid() {
            return this.hostUuid;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getVaultId() {
            return this.vaultId;
        }

        @Override
        public final java.lang.Object getContinuousPlan() {
            return this.continuousPlan;
        }

        @Override
        public final java.lang.Object getCumulativePlan() {
            return this.cumulativePlan;
        }

        @Override
        public final java.lang.Object getFullPlan() {
            return this.fullPlan;
        }

        @Override
        public final java.lang.Object getIncPlan() {
            return this.incPlan;
        }

        @Override
        public final java.lang.Object getInstanceUuid() {
            return this.instanceUuid;
        }

        @Override
        public final java.lang.Object getLogPlan() {
            return this.logPlan;
        }

        @Override
        public final java.lang.Object getMaxRateLimit() {
            return this.maxRateLimit;
        }

        @Override
        public final java.lang.Object getMaxRetrySeconds() {
            return this.maxRetrySeconds;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getSource() {
            return this.source;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbPlanName", om.valueToTree(this.getDbPlanName()));
            data.set("hostUuid", om.valueToTree(this.getHostUuid()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            data.set("vaultId", om.valueToTree(this.getVaultId()));
            if (this.getContinuousPlan() != null) {
                data.set("continuousPlan", om.valueToTree(this.getContinuousPlan()));
            }
            if (this.getCumulativePlan() != null) {
                data.set("cumulativePlan", om.valueToTree(this.getCumulativePlan()));
            }
            if (this.getFullPlan() != null) {
                data.set("fullPlan", om.valueToTree(this.getFullPlan()));
            }
            if (this.getIncPlan() != null) {
                data.set("incPlan", om.valueToTree(this.getIncPlan()));
            }
            if (this.getInstanceUuid() != null) {
                data.set("instanceUuid", om.valueToTree(this.getInstanceUuid()));
            }
            if (this.getLogPlan() != null) {
                data.set("logPlan", om.valueToTree(this.getLogPlan()));
            }
            if (this.getMaxRateLimit() != null) {
                data.set("maxRateLimit", om.valueToTree(this.getMaxRateLimit()));
            }
            if (this.getMaxRetrySeconds() != null) {
                data.set("maxRetrySeconds", om.valueToTree(this.getMaxRetrySeconds()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getSource() != null) {
                data.set("source", om.valueToTree(this.getSource()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.DbPlanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DbPlanProps.Jsii$Proxy that = (DbPlanProps.Jsii$Proxy) o;

            if (!dbPlanName.equals(that.dbPlanName)) return false;
            if (!hostUuid.equals(that.hostUuid)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (!vaultId.equals(that.vaultId)) return false;
            if (this.continuousPlan != null ? !this.continuousPlan.equals(that.continuousPlan) : that.continuousPlan != null) return false;
            if (this.cumulativePlan != null ? !this.cumulativePlan.equals(that.cumulativePlan) : that.cumulativePlan != null) return false;
            if (this.fullPlan != null ? !this.fullPlan.equals(that.fullPlan) : that.fullPlan != null) return false;
            if (this.incPlan != null ? !this.incPlan.equals(that.incPlan) : that.incPlan != null) return false;
            if (this.instanceUuid != null ? !this.instanceUuid.equals(that.instanceUuid) : that.instanceUuid != null) return false;
            if (this.logPlan != null ? !this.logPlan.equals(that.logPlan) : that.logPlan != null) return false;
            if (this.maxRateLimit != null ? !this.maxRateLimit.equals(that.maxRateLimit) : that.maxRateLimit != null) return false;
            if (this.maxRetrySeconds != null ? !this.maxRetrySeconds.equals(that.maxRetrySeconds) : that.maxRetrySeconds != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            return this.source != null ? this.source.equals(that.source) : that.source == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbPlanName.hashCode();
            result = 31 * result + (this.hostUuid.hashCode());
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.vaultId.hashCode());
            result = 31 * result + (this.continuousPlan != null ? this.continuousPlan.hashCode() : 0);
            result = 31 * result + (this.cumulativePlan != null ? this.cumulativePlan.hashCode() : 0);
            result = 31 * result + (this.fullPlan != null ? this.fullPlan.hashCode() : 0);
            result = 31 * result + (this.incPlan != null ? this.incPlan.hashCode() : 0);
            result = 31 * result + (this.instanceUuid != null ? this.instanceUuid.hashCode() : 0);
            result = 31 * result + (this.logPlan != null ? this.logPlan.hashCode() : 0);
            result = 31 * result + (this.maxRateLimit != null ? this.maxRateLimit.hashCode() : 0);
            result = 31 * result + (this.maxRetrySeconds != null ? this.maxRetrySeconds.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.source != null ? this.source.hashCode() : 0);
            return result;
        }
    }
}
