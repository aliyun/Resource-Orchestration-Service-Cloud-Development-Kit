package com.aliyun.ros.cdk.dts;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DTS::MigrationJob2</code>, which is used to purchase a data migration instance and configure a data migration task of the new version.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.MigrationJob2")
public class MigrationJob2 extends com.aliyun.ros.cdk.core.Resource {

    protected MigrationJob2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MigrationJob2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MigrationJob2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MigrationJob2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DtsInstanceId: The ID of the DTS instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DtsJobId: The ID of the task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DtsJobName: The name of the DTS job.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDtsJobName() {
        return software.amazon.jsii.Kernel.get(this, "attrDtsJobName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.MigrationJob2Props.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.MigrationJob2Props value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.MigrationJob2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.MigrationJob2> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dts.MigrationJob2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.MigrationJob2Props.Builder();
        }

        /**
         * Property dataInitialization: Specifies whether to perform full data migration or full data synchronization.
         * <p>
         * Default value: <strong>true</strong>. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param dataInitialization Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. This parameter is required.
         */
        public Builder dataInitialization(final java.lang.Boolean dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }
        /**
         * Property dataInitialization: Specifies whether to perform full data migration or full data synchronization.
         * <p>
         * Default value: <strong>true</strong>. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param dataInitialization Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. This parameter is required.
         */
        public Builder dataInitialization(final com.aliyun.ros.cdk.core.IResolvable dataInitialization) {
            this.props.dataInitialization(dataInitialization);
            return this;
        }

        /**
         * Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization.
         * <p>
         * Default value: <strong>false</strong>. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param dataSynchronization Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. This parameter is required.
         */
        public Builder dataSynchronization(final java.lang.Boolean dataSynchronization) {
            this.props.dataSynchronization(dataSynchronization);
            return this;
        }
        /**
         * Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization.
         * <p>
         * Default value: <strong>false</strong>. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param dataSynchronization Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. This parameter is required.
         */
        public Builder dataSynchronization(final com.aliyun.ros.cdk.core.IResolvable dataSynchronization) {
            this.props.dataSynchronization(dataSynchronization);
            return this;
        }

        /**
         * Property dbList: The objects that you want to migrate or synchronize.
         * <p>
         * @return {@code this}
         * @param dbList Property dbList: The objects that you want to migrate or synchronize. This parameter is required.
         */
        public Builder dbList(final com.aliyun.ros.cdk.core.IResolvable dbList) {
            this.props.dbList(dbList);
            return this;
        }
        /**
         * Property dbList: The objects that you want to migrate or synchronize.
         * <p>
         * @return {@code this}
         * @param dbList Property dbList: The objects that you want to migrate or synchronize. This parameter is required.
         */
        public Builder dbList(final java.util.Map<java.lang.String, ? extends java.lang.Object> dbList) {
            this.props.dbList(dbList);
            return this;
        }

        /**
         * Property destinationEndpoint: Destination instance configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Destination instance configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.core.IResolvable destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }
        /**
         * Property destinationEndpoint: Destination instance configuration.
         * <p>
         * @return {@code this}
         * @param destinationEndpoint Property destinationEndpoint: Destination instance configuration. This parameter is required.
         */
        public Builder destinationEndpoint(final com.aliyun.ros.cdk.dts.RosMigrationJob2.DestinationEndpointProperty destinationEndpoint) {
            this.props.destinationEndpoint(destinationEndpoint);
            return this;
        }

        /**
         * Property dtsJobName: The name of the DTS instance.
         * <p>
         * @return {@code this}
         * @param dtsJobName Property dtsJobName: The name of the DTS instance. This parameter is required.
         */
        public Builder dtsJobName(final java.lang.String dtsJobName) {
            this.props.dtsJobName(dtsJobName);
            return this;
        }
        /**
         * Property dtsJobName: The name of the DTS instance.
         * <p>
         * @return {@code this}
         * @param dtsJobName Property dtsJobName: The name of the DTS instance. This parameter is required.
         */
        public Builder dtsJobName(final com.aliyun.ros.cdk.core.IResolvable dtsJobName) {
            this.props.dtsJobName(dtsJobName);
            return this;
        }

        /**
         * Property sourceEndpoint: Source instance configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Source instance configuration. This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }
        /**
         * Property sourceEndpoint: Source instance configuration.
         * <p>
         * @return {@code this}
         * @param sourceEndpoint Property sourceEndpoint: Source instance configuration. This parameter is required.
         */
        public Builder sourceEndpoint(final com.aliyun.ros.cdk.dts.RosMigrationJob2.SourceEndpointProperty sourceEndpoint) {
            this.props.sourceEndpoint(sourceEndpoint);
            return this;
        }

        /**
         * Property structureInitialization: Specifies whether to perform schema migration or schema synchronization.
         * <p>
         * Default value: true. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param structureInitialization Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. This parameter is required.
         */
        public Builder structureInitialization(final java.lang.Boolean structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }
        /**
         * Property structureInitialization: Specifies whether to perform schema migration or schema synchronization.
         * <p>
         * Default value: true. Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param structureInitialization Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. This parameter is required.
         */
        public Builder structureInitialization(final com.aliyun.ros.cdk.core.IResolvable structureInitialization) {
            this.props.structureInitialization(structureInitialization);
            return this;
        }

        /**
         * Property checkpoint: The start offset of incremental data migration or synchronization.
         * <p>
         * This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * <p>
         * @return {@code this}
         * @param checkpoint Property checkpoint: The start offset of incremental data migration or synchronization. This parameter is required.
         */
        public Builder checkpoint(final java.lang.String checkpoint) {
            this.props.checkpoint(checkpoint);
            return this;
        }
        /**
         * Property checkpoint: The start offset of incremental data migration or synchronization.
         * <p>
         * This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * <p>
         * @return {@code this}
         * @param checkpoint Property checkpoint: The start offset of incremental data migration or synchronization. This parameter is required.
         */
        public Builder checkpoint(final com.aliyun.ros.cdk.core.IResolvable checkpoint) {
            this.props.checkpoint(checkpoint);
            return this;
        }

        /**
         * Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
         * <p>
         * @return {@code this}
         * @param dataCheckConfigure Property dataCheckConfigure: The data verification task for a data migration or synchronization instance. This parameter is required.
         */
        public Builder dataCheckConfigure(final com.aliyun.ros.cdk.core.IResolvable dataCheckConfigure) {
            this.props.dataCheckConfigure(dataCheckConfigure);
            return this;
        }
        /**
         * Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
         * <p>
         * @return {@code this}
         * @param dataCheckConfigure Property dataCheckConfigure: The data verification task for a data migration or synchronization instance. This parameter is required.
         */
        public Builder dataCheckConfigure(final com.aliyun.ros.cdk.dts.RosMigrationJob2.DataCheckConfigureProperty dataCheckConfigure) {
            this.props.dataCheckConfigure(dataCheckConfigure);
            return this;
        }

        /**
         * Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
         * <p>
         * @return {@code this}
         * @param dedicatedClusterId Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs. This parameter is required.
         */
        public Builder dedicatedClusterId(final java.lang.String dedicatedClusterId) {
            this.props.dedicatedClusterId(dedicatedClusterId);
            return this;
        }
        /**
         * Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
         * <p>
         * @return {@code this}
         * @param dedicatedClusterId Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs. This parameter is required.
         */
        public Builder dedicatedClusterId(final com.aliyun.ros.cdk.core.IResolvable dedicatedClusterId) {
            this.props.dedicatedClusterId(dedicatedClusterId);
            return this;
        }

        /**
         * Property delayNotice: Specifies whether to monitor the task latency.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>
         * <p>
         * @return {@code this}
         * @param delayNotice Property delayNotice: Specifies whether to monitor the task latency. This parameter is required.
         */
        public Builder delayNotice(final java.lang.Boolean delayNotice) {
            this.props.delayNotice(delayNotice);
            return this;
        }
        /**
         * Property delayNotice: Specifies whether to monitor the task latency.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>
         * <p>
         * @return {@code this}
         * @param delayNotice Property delayNotice: Specifies whether to monitor the task latency. This parameter is required.
         */
        public Builder delayNotice(final com.aliyun.ros.cdk.core.IResolvable delayNotice) {
            this.props.delayNotice(delayNotice);
            return this;
        }

        /**
         * Property delayPhone: The mobile numbers that receive latency-related alerts.
         * <p>
         * Separate multiple mobile numbers with commas (,).
         * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * <p>
         * @return {@code this}
         * @param delayPhone Property delayPhone: The mobile numbers that receive latency-related alerts. This parameter is required.
         */
        public Builder delayPhone(final java.lang.String delayPhone) {
            this.props.delayPhone(delayPhone);
            return this;
        }
        /**
         * Property delayPhone: The mobile numbers that receive latency-related alerts.
         * <p>
         * Separate multiple mobile numbers with commas (,).
         * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * <p>
         * @return {@code this}
         * @param delayPhone Property delayPhone: The mobile numbers that receive latency-related alerts. This parameter is required.
         */
        public Builder delayPhone(final com.aliyun.ros.cdk.core.IResolvable delayPhone) {
            this.props.delayPhone(delayPhone);
            return this;
        }

        /**
         * Property delayRuleTime: The threshold for latency alerts.
         * <p>
         * Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
         * <p>
         * @return {@code this}
         * @param delayRuleTime Property delayRuleTime: The threshold for latency alerts. This parameter is required.
         */
        public Builder delayRuleTime(final java.lang.Number delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }
        /**
         * Property delayRuleTime: The threshold for latency alerts.
         * <p>
         * Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
         * <p>
         * @return {@code this}
         * @param delayRuleTime Property delayRuleTime: The threshold for latency alerts. This parameter is required.
         */
        public Builder delayRuleTime(final com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.props.delayRuleTime(delayRuleTime);
            return this;
        }

        /**
         * Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>
         * <p>
         * @return {@code this}
         * @param disasterRecoveryJob Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. This parameter is required.
         */
        public Builder disasterRecoveryJob(final java.lang.Boolean disasterRecoveryJob) {
            this.props.disasterRecoveryJob(disasterRecoveryJob);
            return this;
        }
        /**
         * Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>
         * <p>
         * @return {@code this}
         * @param disasterRecoveryJob Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. This parameter is required.
         */
        public Builder disasterRecoveryJob(final com.aliyun.ros.cdk.core.IResolvable disasterRecoveryJob) {
            this.props.disasterRecoveryJob(disasterRecoveryJob);
            return this;
        }

        /**
         * Property dtsBisLabel: The environment tag of the DTS instance.
         * <p>
         * Valid values: <strong>normal</strong> and <strong>online</strong>.
         * <p>
         * @return {@code this}
         * @param dtsBisLabel Property dtsBisLabel: The environment tag of the DTS instance. This parameter is required.
         */
        public Builder dtsBisLabel(final java.lang.String dtsBisLabel) {
            this.props.dtsBisLabel(dtsBisLabel);
            return this;
        }
        /**
         * Property dtsBisLabel: The environment tag of the DTS instance.
         * <p>
         * Valid values: <strong>normal</strong> and <strong>online</strong>.
         * <p>
         * @return {@code this}
         * @param dtsBisLabel Property dtsBisLabel: The environment tag of the DTS instance. This parameter is required.
         */
        public Builder dtsBisLabel(final com.aliyun.ros.cdk.core.IResolvable dtsBisLabel) {
            this.props.dtsBisLabel(dtsBisLabel);
            return this;
        }

        /**
         * Property dtsInstanceId: The ID of the DTS instance.
         * <p>
         * @return {@code this}
         * @param dtsInstanceId Property dtsInstanceId: The ID of the DTS instance. This parameter is required.
         */
        public Builder dtsInstanceId(final java.lang.String dtsInstanceId) {
            this.props.dtsInstanceId(dtsInstanceId);
            return this;
        }
        /**
         * Property dtsInstanceId: The ID of the DTS instance.
         * <p>
         * @return {@code this}
         * @param dtsInstanceId Property dtsInstanceId: The ID of the DTS instance. This parameter is required.
         */
        public Builder dtsInstanceId(final com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.props.dtsInstanceId(dtsInstanceId);
            return this;
        }

        /**
         * Property dtsJobId: The ID of the DTS task.
         * <p>
         * @return {@code this}
         * @param dtsJobId Property dtsJobId: The ID of the DTS task. This parameter is required.
         */
        public Builder dtsJobId(final java.lang.String dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }
        /**
         * Property dtsJobId: The ID of the DTS task.
         * <p>
         * @return {@code this}
         * @param dtsJobId Property dtsJobId: The ID of the DTS task. This parameter is required.
         */
        public Builder dtsJobId(final com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.props.dtsJobId(dtsJobId);
            return this;
        }

        /**
         * Property errorNotice: Specifies whether to monitor the task status.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param errorNotice Property errorNotice: Specifies whether to monitor the task status. This parameter is required.
         */
        public Builder errorNotice(final java.lang.Boolean errorNotice) {
            this.props.errorNotice(errorNotice);
            return this;
        }
        /**
         * Property errorNotice: Specifies whether to monitor the task status.
         * <p>
         * Valid values: <strong>true</strong> and <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param errorNotice Property errorNotice: Specifies whether to monitor the task status. This parameter is required.
         */
        public Builder errorNotice(final com.aliyun.ros.cdk.core.IResolvable errorNotice) {
            this.props.errorNotice(errorNotice);
            return this;
        }

        /**
         * Property errorPhone: The mobile numbers that receive status-related alerts.
         * <p>
         * Separate multiple mobile numbers with commas (,).
         * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * <p>
         * @return {@code this}
         * @param errorPhone Property errorPhone: The mobile numbers that receive status-related alerts. This parameter is required.
         */
        public Builder errorPhone(final java.lang.String errorPhone) {
            this.props.errorPhone(errorPhone);
            return this;
        }
        /**
         * Property errorPhone: The mobile numbers that receive status-related alerts.
         * <p>
         * Separate multiple mobile numbers with commas (,).
         * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * <p>
         * @return {@code this}
         * @param errorPhone Property errorPhone: The mobile numbers that receive status-related alerts. This parameter is required.
         */
        public Builder errorPhone(final com.aliyun.ros.cdk.core.IResolvable errorPhone) {
            this.props.errorPhone(errorPhone);
            return this;
        }

        /**
         * Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
         * <p>
         * @return {@code this}
         * @param fileOssUrl Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task. This parameter is required.
         */
        public Builder fileOssUrl(final java.lang.String fileOssUrl) {
            this.props.fileOssUrl(fileOssUrl);
            return this;
        }
        /**
         * Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
         * <p>
         * @return {@code this}
         * @param fileOssUrl Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task. This parameter is required.
         */
        public Builder fileOssUrl(final com.aliyun.ros.cdk.core.IResolvable fileOssUrl) {
            this.props.fileOssUrl(fileOssUrl);
            return this;
        }

        /**
         * Property reserve: The reserved parameter of DTS.
         * <p>
         * You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param reserve Property reserve: The reserved parameter of DTS. This parameter is required.
         */
        public Builder reserve(final com.aliyun.ros.cdk.core.IResolvable reserve) {
            this.props.reserve(reserve);
            return this;
        }
        /**
         * Property reserve: The reserved parameter of DTS.
         * <p>
         * You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param reserve Property reserve: The reserved parameter of DTS. This parameter is required.
         */
        public Builder reserve(final java.util.Map<java.lang.String, ? extends java.lang.Object> reserve) {
            this.props.reserve(reserve);
            return this;
        }

        /**
         * Property status: The status of the resource.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Migrating</strong>: Start the task.</li>
         * <li><strong>Suspending</strong>: Suspend the task.</li>
         * <li><strong>Stopping</strong>: Stop the task.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the resource. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the resource.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Migrating</strong>: Start the task.</li>
         * <li><strong>Suspending</strong>: Suspend the task.</li>
         * <li><strong>Stopping</strong>: Stop the task.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the resource. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.MigrationJob2}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.MigrationJob2 build() {
            return new com.aliyun.ros.cdk.dts.MigrationJob2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
