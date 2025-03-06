package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>RosMigrationJob2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.128Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosMigrationJob2Props")
@software.amazon.jsii.Jsii.Proxy(RosMigrationJob2Props.Jsii$Proxy.class)
public interface RosMigrationJob2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataInitialization();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataSynchronization();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDtsJobName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStructureInitialization();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckpoint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCheckConfigure() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayNotice() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayPhone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayRuleTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisasterRecoveryJob() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsBisLabel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsJobId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorNotice() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorPhone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileOssUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReserve() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMigrationJob2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMigrationJob2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMigrationJob2Props> {
        java.lang.Object dataInitialization;
        java.lang.Object dataSynchronization;
        java.lang.Object dbList;
        java.lang.Object destinationEndpoint;
        java.lang.Object dtsJobName;
        java.lang.Object sourceEndpoint;
        java.lang.Object structureInitialization;
        java.lang.Object checkpoint;
        java.lang.Object dataCheckConfigure;
        java.lang.Object dedicatedClusterId;
        java.lang.Object delayNotice;
        java.lang.Object delayPhone;
        java.lang.Object delayRuleTime;
        java.lang.Object disasterRecoveryJob;
        java.lang.Object dtsBisLabel;
        java.lang.Object dtsInstanceId;
        java.lang.Object dtsJobId;
        java.lang.Object errorNotice;
        java.lang.Object errorPhone;
        java.lang.Object fileOssUrl;
        java.lang.Object reserve;
        java.lang.Object status;

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataInitialization}
         * @param dataInitialization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataInitialization(java.lang.Boolean dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataInitialization}
         * @param dataInitialization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataInitialization(com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.dataInitialization = dataInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataSynchronization}
         * @param dataSynchronization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSynchronization(java.lang.Boolean dataSynchronization) {
            this.dataSynchronization = dataSynchronization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataSynchronization}
         * @param dataSynchronization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSynchronization(com.aliyun.ros.cdk.core.IResolvable dataSynchronization) {
            this.dataSynchronization = dataSynchronization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDbList}
         * @param dbList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbList(com.aliyun.ros.cdk.core.IResolvable dbList) {
            this.dbList = dbList;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDbList}
         * @param dbList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbList(java.util.Map<java.lang.String, ? extends java.lang.Object> dbList) {
            this.dbList = dbList;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDestinationEndpoint}
         * @param destinationEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDestinationEndpoint}
         * @param destinationEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpoint(com.aliyun.ros.cdk.dts.RosMigrationJob2.DestinationEndpointProperty destinationEndpoint) {
            this.destinationEndpoint = destinationEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsJobName}
         * @param dtsJobName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobName(java.lang.String dtsJobName) {
            this.dtsJobName = dtsJobName;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsJobName}
         * @param dtsJobName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobName(com.aliyun.ros.cdk.core.IResolvable dtsJobName) {
            this.dtsJobName = dtsJobName;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getSourceEndpoint}
         * @param sourceEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getSourceEndpoint}
         * @param sourceEndpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosMigrationJob2.SourceEndpointProperty sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getStructureInitialization}
         * @param structureInitialization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder structureInitialization(java.lang.Boolean structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getStructureInitialization}
         * @param structureInitialization the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder structureInitialization(com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.structureInitialization = structureInitialization;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getCheckpoint}
         * @param checkpoint the value to be set.
         * @return {@code this}
         */
        public Builder checkpoint(java.lang.String checkpoint) {
            this.checkpoint = checkpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getCheckpoint}
         * @param checkpoint the value to be set.
         * @return {@code this}
         */
        public Builder checkpoint(com.aliyun.ros.cdk.core.IResolvable checkpoint) {
            this.checkpoint = checkpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataCheckConfigure}
         * @param dataCheckConfigure the value to be set.
         * @return {@code this}
         */
        public Builder dataCheckConfigure(com.aliyun.ros.cdk.core.IResolvable dataCheckConfigure) {
            this.dataCheckConfigure = dataCheckConfigure;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDataCheckConfigure}
         * @param dataCheckConfigure the value to be set.
         * @return {@code this}
         */
        public Builder dataCheckConfigure(com.aliyun.ros.cdk.dts.RosMigrationJob2.DataCheckConfigureProperty dataCheckConfigure) {
            this.dataCheckConfigure = dataCheckConfigure;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDedicatedClusterId}
         * @param dedicatedClusterId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedClusterId(java.lang.String dedicatedClusterId) {
            this.dedicatedClusterId = dedicatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDedicatedClusterId}
         * @param dedicatedClusterId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedClusterId) {
            this.dedicatedClusterId = dedicatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayNotice}
         * @param delayNotice the value to be set.
         * @return {@code this}
         */
        public Builder delayNotice(java.lang.Boolean delayNotice) {
            this.delayNotice = delayNotice;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayNotice}
         * @param delayNotice the value to be set.
         * @return {@code this}
         */
        public Builder delayNotice(com.aliyun.ros.cdk.core.IResolvable delayNotice) {
            this.delayNotice = delayNotice;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayPhone}
         * @param delayPhone the value to be set.
         * @return {@code this}
         */
        public Builder delayPhone(java.lang.String delayPhone) {
            this.delayPhone = delayPhone;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayPhone}
         * @param delayPhone the value to be set.
         * @return {@code this}
         */
        public Builder delayPhone(com.aliyun.ros.cdk.core.IResolvable delayPhone) {
            this.delayPhone = delayPhone;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayRuleTime}
         * @param delayRuleTime the value to be set.
         * @return {@code this}
         */
        public Builder delayRuleTime(java.lang.Number delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDelayRuleTime}
         * @param delayRuleTime the value to be set.
         * @return {@code this}
         */
        public Builder delayRuleTime(com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDisasterRecoveryJob}
         * @param disasterRecoveryJob the value to be set.
         * @return {@code this}
         */
        public Builder disasterRecoveryJob(java.lang.Boolean disasterRecoveryJob) {
            this.disasterRecoveryJob = disasterRecoveryJob;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDisasterRecoveryJob}
         * @param disasterRecoveryJob the value to be set.
         * @return {@code this}
         */
        public Builder disasterRecoveryJob(com.aliyun.ros.cdk.core.IResolvable disasterRecoveryJob) {
            this.disasterRecoveryJob = disasterRecoveryJob;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsBisLabel}
         * @param dtsBisLabel the value to be set.
         * @return {@code this}
         */
        public Builder dtsBisLabel(java.lang.String dtsBisLabel) {
            this.dtsBisLabel = dtsBisLabel;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsBisLabel}
         * @param dtsBisLabel the value to be set.
         * @return {@code this}
         */
        public Builder dtsBisLabel(com.aliyun.ros.cdk.core.IResolvable dtsBisLabel) {
            this.dtsBisLabel = dtsBisLabel;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsInstanceId}
         * @param dtsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dtsInstanceId(java.lang.String dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsInstanceId}
         * @param dtsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dtsInstanceId(com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsJobId}
         * @param dtsJobId the value to be set.
         * @return {@code this}
         */
        public Builder dtsJobId(java.lang.String dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getDtsJobId}
         * @param dtsJobId the value to be set.
         * @return {@code this}
         */
        public Builder dtsJobId(com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getErrorNotice}
         * @param errorNotice the value to be set.
         * @return {@code this}
         */
        public Builder errorNotice(java.lang.Boolean errorNotice) {
            this.errorNotice = errorNotice;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getErrorNotice}
         * @param errorNotice the value to be set.
         * @return {@code this}
         */
        public Builder errorNotice(com.aliyun.ros.cdk.core.IResolvable errorNotice) {
            this.errorNotice = errorNotice;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getErrorPhone}
         * @param errorPhone the value to be set.
         * @return {@code this}
         */
        public Builder errorPhone(java.lang.String errorPhone) {
            this.errorPhone = errorPhone;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getErrorPhone}
         * @param errorPhone the value to be set.
         * @return {@code this}
         */
        public Builder errorPhone(com.aliyun.ros.cdk.core.IResolvable errorPhone) {
            this.errorPhone = errorPhone;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getFileOssUrl}
         * @param fileOssUrl the value to be set.
         * @return {@code this}
         */
        public Builder fileOssUrl(java.lang.String fileOssUrl) {
            this.fileOssUrl = fileOssUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getFileOssUrl}
         * @param fileOssUrl the value to be set.
         * @return {@code this}
         */
        public Builder fileOssUrl(com.aliyun.ros.cdk.core.IResolvable fileOssUrl) {
            this.fileOssUrl = fileOssUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getReserve}
         * @param reserve the value to be set.
         * @return {@code this}
         */
        public Builder reserve(com.aliyun.ros.cdk.core.IResolvable reserve) {
            this.reserve = reserve;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getReserve}
         * @param reserve the value to be set.
         * @return {@code this}
         */
        public Builder reserve(java.util.Map<java.lang.String, ? extends java.lang.Object> reserve) {
            this.reserve = reserve;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosMigrationJob2Props#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMigrationJob2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMigrationJob2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMigrationJob2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMigrationJob2Props {
        private final java.lang.Object dataInitialization;
        private final java.lang.Object dataSynchronization;
        private final java.lang.Object dbList;
        private final java.lang.Object destinationEndpoint;
        private final java.lang.Object dtsJobName;
        private final java.lang.Object sourceEndpoint;
        private final java.lang.Object structureInitialization;
        private final java.lang.Object checkpoint;
        private final java.lang.Object dataCheckConfigure;
        private final java.lang.Object dedicatedClusterId;
        private final java.lang.Object delayNotice;
        private final java.lang.Object delayPhone;
        private final java.lang.Object delayRuleTime;
        private final java.lang.Object disasterRecoveryJob;
        private final java.lang.Object dtsBisLabel;
        private final java.lang.Object dtsInstanceId;
        private final java.lang.Object dtsJobId;
        private final java.lang.Object errorNotice;
        private final java.lang.Object errorPhone;
        private final java.lang.Object fileOssUrl;
        private final java.lang.Object reserve;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataInitialization = software.amazon.jsii.Kernel.get(this, "dataInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSynchronization = software.amazon.jsii.Kernel.get(this, "dataSynchronization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbList = software.amazon.jsii.Kernel.get(this, "dbList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpoint = software.amazon.jsii.Kernel.get(this, "destinationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsJobName = software.amazon.jsii.Kernel.get(this, "dtsJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.structureInitialization = software.amazon.jsii.Kernel.get(this, "structureInitialization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkpoint = software.amazon.jsii.Kernel.get(this, "checkpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCheckConfigure = software.amazon.jsii.Kernel.get(this, "dataCheckConfigure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayNotice = software.amazon.jsii.Kernel.get(this, "delayNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayPhone = software.amazon.jsii.Kernel.get(this, "delayPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayRuleTime = software.amazon.jsii.Kernel.get(this, "delayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disasterRecoveryJob = software.amazon.jsii.Kernel.get(this, "disasterRecoveryJob", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsBisLabel = software.amazon.jsii.Kernel.get(this, "dtsBisLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsInstanceId = software.amazon.jsii.Kernel.get(this, "dtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsJobId = software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorNotice = software.amazon.jsii.Kernel.get(this, "errorNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorPhone = software.amazon.jsii.Kernel.get(this, "errorPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileOssUrl = software.amazon.jsii.Kernel.get(this, "fileOssUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reserve = software.amazon.jsii.Kernel.get(this, "reserve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataInitialization = java.util.Objects.requireNonNull(builder.dataInitialization, "dataInitialization is required");
            this.dataSynchronization = java.util.Objects.requireNonNull(builder.dataSynchronization, "dataSynchronization is required");
            this.dbList = java.util.Objects.requireNonNull(builder.dbList, "dbList is required");
            this.destinationEndpoint = java.util.Objects.requireNonNull(builder.destinationEndpoint, "destinationEndpoint is required");
            this.dtsJobName = java.util.Objects.requireNonNull(builder.dtsJobName, "dtsJobName is required");
            this.sourceEndpoint = java.util.Objects.requireNonNull(builder.sourceEndpoint, "sourceEndpoint is required");
            this.structureInitialization = java.util.Objects.requireNonNull(builder.structureInitialization, "structureInitialization is required");
            this.checkpoint = builder.checkpoint;
            this.dataCheckConfigure = builder.dataCheckConfigure;
            this.dedicatedClusterId = builder.dedicatedClusterId;
            this.delayNotice = builder.delayNotice;
            this.delayPhone = builder.delayPhone;
            this.delayRuleTime = builder.delayRuleTime;
            this.disasterRecoveryJob = builder.disasterRecoveryJob;
            this.dtsBisLabel = builder.dtsBisLabel;
            this.dtsInstanceId = builder.dtsInstanceId;
            this.dtsJobId = builder.dtsJobId;
            this.errorNotice = builder.errorNotice;
            this.errorPhone = builder.errorPhone;
            this.fileOssUrl = builder.fileOssUrl;
            this.reserve = builder.reserve;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getDataInitialization() {
            return this.dataInitialization;
        }

        @Override
        public final java.lang.Object getDataSynchronization() {
            return this.dataSynchronization;
        }

        @Override
        public final java.lang.Object getDbList() {
            return this.dbList;
        }

        @Override
        public final java.lang.Object getDestinationEndpoint() {
            return this.destinationEndpoint;
        }

        @Override
        public final java.lang.Object getDtsJobName() {
            return this.dtsJobName;
        }

        @Override
        public final java.lang.Object getSourceEndpoint() {
            return this.sourceEndpoint;
        }

        @Override
        public final java.lang.Object getStructureInitialization() {
            return this.structureInitialization;
        }

        @Override
        public final java.lang.Object getCheckpoint() {
            return this.checkpoint;
        }

        @Override
        public final java.lang.Object getDataCheckConfigure() {
            return this.dataCheckConfigure;
        }

        @Override
        public final java.lang.Object getDedicatedClusterId() {
            return this.dedicatedClusterId;
        }

        @Override
        public final java.lang.Object getDelayNotice() {
            return this.delayNotice;
        }

        @Override
        public final java.lang.Object getDelayPhone() {
            return this.delayPhone;
        }

        @Override
        public final java.lang.Object getDelayRuleTime() {
            return this.delayRuleTime;
        }

        @Override
        public final java.lang.Object getDisasterRecoveryJob() {
            return this.disasterRecoveryJob;
        }

        @Override
        public final java.lang.Object getDtsBisLabel() {
            return this.dtsBisLabel;
        }

        @Override
        public final java.lang.Object getDtsInstanceId() {
            return this.dtsInstanceId;
        }

        @Override
        public final java.lang.Object getDtsJobId() {
            return this.dtsJobId;
        }

        @Override
        public final java.lang.Object getErrorNotice() {
            return this.errorNotice;
        }

        @Override
        public final java.lang.Object getErrorPhone() {
            return this.errorPhone;
        }

        @Override
        public final java.lang.Object getFileOssUrl() {
            return this.fileOssUrl;
        }

        @Override
        public final java.lang.Object getReserve() {
            return this.reserve;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataInitialization", om.valueToTree(this.getDataInitialization()));
            data.set("dataSynchronization", om.valueToTree(this.getDataSynchronization()));
            data.set("dbList", om.valueToTree(this.getDbList()));
            data.set("destinationEndpoint", om.valueToTree(this.getDestinationEndpoint()));
            data.set("dtsJobName", om.valueToTree(this.getDtsJobName()));
            data.set("sourceEndpoint", om.valueToTree(this.getSourceEndpoint()));
            data.set("structureInitialization", om.valueToTree(this.getStructureInitialization()));
            if (this.getCheckpoint() != null) {
                data.set("checkpoint", om.valueToTree(this.getCheckpoint()));
            }
            if (this.getDataCheckConfigure() != null) {
                data.set("dataCheckConfigure", om.valueToTree(this.getDataCheckConfigure()));
            }
            if (this.getDedicatedClusterId() != null) {
                data.set("dedicatedClusterId", om.valueToTree(this.getDedicatedClusterId()));
            }
            if (this.getDelayNotice() != null) {
                data.set("delayNotice", om.valueToTree(this.getDelayNotice()));
            }
            if (this.getDelayPhone() != null) {
                data.set("delayPhone", om.valueToTree(this.getDelayPhone()));
            }
            if (this.getDelayRuleTime() != null) {
                data.set("delayRuleTime", om.valueToTree(this.getDelayRuleTime()));
            }
            if (this.getDisasterRecoveryJob() != null) {
                data.set("disasterRecoveryJob", om.valueToTree(this.getDisasterRecoveryJob()));
            }
            if (this.getDtsBisLabel() != null) {
                data.set("dtsBisLabel", om.valueToTree(this.getDtsBisLabel()));
            }
            if (this.getDtsInstanceId() != null) {
                data.set("dtsInstanceId", om.valueToTree(this.getDtsInstanceId()));
            }
            if (this.getDtsJobId() != null) {
                data.set("dtsJobId", om.valueToTree(this.getDtsJobId()));
            }
            if (this.getErrorNotice() != null) {
                data.set("errorNotice", om.valueToTree(this.getErrorNotice()));
            }
            if (this.getErrorPhone() != null) {
                data.set("errorPhone", om.valueToTree(this.getErrorPhone()));
            }
            if (this.getFileOssUrl() != null) {
                data.set("fileOssUrl", om.valueToTree(this.getFileOssUrl()));
            }
            if (this.getReserve() != null) {
                data.set("reserve", om.valueToTree(this.getReserve()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosMigrationJob2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMigrationJob2Props.Jsii$Proxy that = (RosMigrationJob2Props.Jsii$Proxy) o;

            if (!dataInitialization.equals(that.dataInitialization)) return false;
            if (!dataSynchronization.equals(that.dataSynchronization)) return false;
            if (!dbList.equals(that.dbList)) return false;
            if (!destinationEndpoint.equals(that.destinationEndpoint)) return false;
            if (!dtsJobName.equals(that.dtsJobName)) return false;
            if (!sourceEndpoint.equals(that.sourceEndpoint)) return false;
            if (!structureInitialization.equals(that.structureInitialization)) return false;
            if (this.checkpoint != null ? !this.checkpoint.equals(that.checkpoint) : that.checkpoint != null) return false;
            if (this.dataCheckConfigure != null ? !this.dataCheckConfigure.equals(that.dataCheckConfigure) : that.dataCheckConfigure != null) return false;
            if (this.dedicatedClusterId != null ? !this.dedicatedClusterId.equals(that.dedicatedClusterId) : that.dedicatedClusterId != null) return false;
            if (this.delayNotice != null ? !this.delayNotice.equals(that.delayNotice) : that.delayNotice != null) return false;
            if (this.delayPhone != null ? !this.delayPhone.equals(that.delayPhone) : that.delayPhone != null) return false;
            if (this.delayRuleTime != null ? !this.delayRuleTime.equals(that.delayRuleTime) : that.delayRuleTime != null) return false;
            if (this.disasterRecoveryJob != null ? !this.disasterRecoveryJob.equals(that.disasterRecoveryJob) : that.disasterRecoveryJob != null) return false;
            if (this.dtsBisLabel != null ? !this.dtsBisLabel.equals(that.dtsBisLabel) : that.dtsBisLabel != null) return false;
            if (this.dtsInstanceId != null ? !this.dtsInstanceId.equals(that.dtsInstanceId) : that.dtsInstanceId != null) return false;
            if (this.dtsJobId != null ? !this.dtsJobId.equals(that.dtsJobId) : that.dtsJobId != null) return false;
            if (this.errorNotice != null ? !this.errorNotice.equals(that.errorNotice) : that.errorNotice != null) return false;
            if (this.errorPhone != null ? !this.errorPhone.equals(that.errorPhone) : that.errorPhone != null) return false;
            if (this.fileOssUrl != null ? !this.fileOssUrl.equals(that.fileOssUrl) : that.fileOssUrl != null) return false;
            if (this.reserve != null ? !this.reserve.equals(that.reserve) : that.reserve != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataInitialization.hashCode();
            result = 31 * result + (this.dataSynchronization.hashCode());
            result = 31 * result + (this.dbList.hashCode());
            result = 31 * result + (this.destinationEndpoint.hashCode());
            result = 31 * result + (this.dtsJobName.hashCode());
            result = 31 * result + (this.sourceEndpoint.hashCode());
            result = 31 * result + (this.structureInitialization.hashCode());
            result = 31 * result + (this.checkpoint != null ? this.checkpoint.hashCode() : 0);
            result = 31 * result + (this.dataCheckConfigure != null ? this.dataCheckConfigure.hashCode() : 0);
            result = 31 * result + (this.dedicatedClusterId != null ? this.dedicatedClusterId.hashCode() : 0);
            result = 31 * result + (this.delayNotice != null ? this.delayNotice.hashCode() : 0);
            result = 31 * result + (this.delayPhone != null ? this.delayPhone.hashCode() : 0);
            result = 31 * result + (this.delayRuleTime != null ? this.delayRuleTime.hashCode() : 0);
            result = 31 * result + (this.disasterRecoveryJob != null ? this.disasterRecoveryJob.hashCode() : 0);
            result = 31 * result + (this.dtsBisLabel != null ? this.dtsBisLabel.hashCode() : 0);
            result = 31 * result + (this.dtsInstanceId != null ? this.dtsInstanceId.hashCode() : 0);
            result = 31 * result + (this.dtsJobId != null ? this.dtsJobId.hashCode() : 0);
            result = 31 * result + (this.errorNotice != null ? this.errorNotice.hashCode() : 0);
            result = 31 * result + (this.errorPhone != null ? this.errorPhone.hashCode() : 0);
            result = 31 * result + (this.fileOssUrl != null ? this.fileOssUrl.hashCode() : 0);
            result = 31 * result + (this.reserve != null ? this.reserve.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
