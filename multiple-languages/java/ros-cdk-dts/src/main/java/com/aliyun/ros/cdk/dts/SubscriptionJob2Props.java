package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>SubscriptionJob2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.161Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SubscriptionJob2Props")
@software.amazon.jsii.Jsii.Proxy(SubscriptionJob2Props.Jsii$Proxy.class)
public interface SubscriptionJob2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbList: The objects for which you want to track data changes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbList();

    /**
     * Property dtsJobName: The name of the DTS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDtsJobName();

    /**
     * Property sourceEndpoint: Source instance configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint();

    /**
     * Property subscriptionInstance: Subscription instance configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionInstance();

    /**
     * Property checkpoint: The start offset of incremental data migration or synchronization.
     * <p>
     * This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckpoint() {
        return null;
    }

    /**
     * Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedClusterId() {
        return null;
    }

    /**
     * Property delayNotice: Specifies whether to monitor the task latency.
     * <p>
     * Valid values: <strong>true</strong> and <strong>false</strong>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayNotice() {
        return null;
    }

    /**
     * Property delayPhone: The mobile numbers that receive latency-related alerts.
     * <p>
     * Separate multiple mobile numbers with commas (,).
     * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayPhone() {
        return null;
    }

    /**
     * Property delayRuleTime: The threshold for latency alerts.
     * <p>
     * Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayRuleTime() {
        return null;
    }

    /**
     * Property dtsBisLabel: The environment tag of the DTS instance.
     * <p>
     * Valid values: <strong>normal</strong> and <strong>online</strong>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsBisLabel() {
        return null;
    }

    /**
     * Property dtsInstanceId: The ID of the DTS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsInstanceId() {
        return null;
    }

    /**
     * Property dtsJobId: The ID of the DTS task.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDtsJobId() {
        return null;
    }

    /**
     * Property errorNotice: Specifies whether to monitor the task status.
     * <p>
     * Valid values: <strong>true</strong> and <strong>false</strong>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorNotice() {
        return null;
    }

    /**
     * Property errorPhone: The mobile numbers that receive status-related alerts.
     * <p>
     * Separate multiple mobile numbers with commas (,).
     * <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorPhone() {
        return null;
    }

    /**
     * Property reserve: The reserved parameter of DTS.
     * <p>
     * You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReserve() {
        return null;
    }

    /**
     * Property status: The status of the resource.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>Subscribing</strong>: Start the task.</li>
     * <li><strong>Suspending</strong>: Suspend the task.</li>
     * <li><strong>Stopping</strong>: Stop the task.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property subscriptionDataType: Subscription data type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionDataType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubscriptionJob2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubscriptionJob2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubscriptionJob2Props> {
        java.lang.Object dbList;
        java.lang.Object dtsJobName;
        java.lang.Object sourceEndpoint;
        java.lang.Object subscriptionInstance;
        java.lang.Object checkpoint;
        java.lang.Object dedicatedClusterId;
        java.lang.Object delayNotice;
        java.lang.Object delayPhone;
        java.lang.Object delayRuleTime;
        java.lang.Object dtsBisLabel;
        java.lang.Object dtsInstanceId;
        java.lang.Object dtsJobId;
        java.lang.Object errorNotice;
        java.lang.Object errorPhone;
        java.lang.Object reserve;
        java.lang.Object status;
        java.lang.Object subscriptionDataType;

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDbList}
         * @param dbList Property dbList: The objects for which you want to track data changes. This parameter is required.
         * @return {@code this}
         */
        public Builder dbList(com.aliyun.ros.cdk.core.IResolvable dbList) {
            this.dbList = dbList;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDbList}
         * @param dbList Property dbList: The objects for which you want to track data changes. This parameter is required.
         * @return {@code this}
         */
        public Builder dbList(java.util.Map<java.lang.String, ? extends java.lang.Object> dbList) {
            this.dbList = dbList;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsJobName}
         * @param dtsJobName Property dtsJobName: The name of the DTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobName(java.lang.String dtsJobName) {
            this.dtsJobName = dtsJobName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsJobName}
         * @param dtsJobName Property dtsJobName: The name of the DTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobName(com.aliyun.ros.cdk.core.IResolvable dtsJobName) {
            this.dtsJobName = dtsJobName;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Source instance configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSourceEndpoint}
         * @param sourceEndpoint Property sourceEndpoint: Source instance configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosSubscriptionJob2.SourceEndpointProperty sourceEndpoint) {
            this.sourceEndpoint = sourceEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSubscriptionInstance}
         * @param subscriptionInstance Property subscriptionInstance: Subscription instance configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionInstance(com.aliyun.ros.cdk.core.IResolvable subscriptionInstance) {
            this.subscriptionInstance = subscriptionInstance;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSubscriptionInstance}
         * @param subscriptionInstance Property subscriptionInstance: Subscription instance configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionInstance(com.aliyun.ros.cdk.dts.RosSubscriptionJob2.SubscriptionInstanceProperty subscriptionInstance) {
            this.subscriptionInstance = subscriptionInstance;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getCheckpoint}
         * @param checkpoint Property checkpoint: The start offset of incremental data migration or synchronization.
         *                   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * @return {@code this}
         */
        public Builder checkpoint(java.lang.String checkpoint) {
            this.checkpoint = checkpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getCheckpoint}
         * @param checkpoint Property checkpoint: The start offset of incremental data migration or synchronization.
         *                   This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * @return {@code this}
         */
        public Builder checkpoint(com.aliyun.ros.cdk.core.IResolvable checkpoint) {
            this.checkpoint = checkpoint;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDedicatedClusterId}
         * @param dedicatedClusterId Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
         * @return {@code this}
         */
        public Builder dedicatedClusterId(java.lang.String dedicatedClusterId) {
            this.dedicatedClusterId = dedicatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDedicatedClusterId}
         * @param dedicatedClusterId Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
         * @return {@code this}
         */
        public Builder dedicatedClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedClusterId) {
            this.dedicatedClusterId = dedicatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayNotice}
         * @param delayNotice Property delayNotice: Specifies whether to monitor the task latency.
         *                    Valid values: <strong>true</strong> and <strong>false</strong>
         * @return {@code this}
         */
        public Builder delayNotice(java.lang.Boolean delayNotice) {
            this.delayNotice = delayNotice;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayNotice}
         * @param delayNotice Property delayNotice: Specifies whether to monitor the task latency.
         *                    Valid values: <strong>true</strong> and <strong>false</strong>
         * @return {@code this}
         */
        public Builder delayNotice(com.aliyun.ros.cdk.core.IResolvable delayNotice) {
            this.delayNotice = delayNotice;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayPhone}
         * @param delayPhone Property delayPhone: The mobile numbers that receive latency-related alerts.
         *                   Separate multiple mobile numbers with commas (,).
         *                   <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * @return {@code this}
         */
        public Builder delayPhone(java.lang.String delayPhone) {
            this.delayPhone = delayPhone;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayPhone}
         * @param delayPhone Property delayPhone: The mobile numbers that receive latency-related alerts.
         *                   Separate multiple mobile numbers with commas (,).
         *                   <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * @return {@code this}
         */
        public Builder delayPhone(com.aliyun.ros.cdk.core.IResolvable delayPhone) {
            this.delayPhone = delayPhone;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayRuleTime}
         * @param delayRuleTime Property delayRuleTime: The threshold for latency alerts.
         *                      Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
         * @return {@code this}
         */
        public Builder delayRuleTime(java.lang.Number delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDelayRuleTime}
         * @param delayRuleTime Property delayRuleTime: The threshold for latency alerts.
         *                      Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
         * @return {@code this}
         */
        public Builder delayRuleTime(com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsBisLabel}
         * @param dtsBisLabel Property dtsBisLabel: The environment tag of the DTS instance.
         *                    Valid values: <strong>normal</strong> and <strong>online</strong>.
         * @return {@code this}
         */
        public Builder dtsBisLabel(java.lang.String dtsBisLabel) {
            this.dtsBisLabel = dtsBisLabel;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsBisLabel}
         * @param dtsBisLabel Property dtsBisLabel: The environment tag of the DTS instance.
         *                    Valid values: <strong>normal</strong> and <strong>online</strong>.
         * @return {@code this}
         */
        public Builder dtsBisLabel(com.aliyun.ros.cdk.core.IResolvable dtsBisLabel) {
            this.dtsBisLabel = dtsBisLabel;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: The ID of the DTS instance.
         * @return {@code this}
         */
        public Builder dtsInstanceId(java.lang.String dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsInstanceId}
         * @param dtsInstanceId Property dtsInstanceId: The ID of the DTS instance.
         * @return {@code this}
         */
        public Builder dtsInstanceId(com.aliyun.ros.cdk.core.IResolvable dtsInstanceId) {
            this.dtsInstanceId = dtsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsJobId}
         * @param dtsJobId Property dtsJobId: The ID of the DTS task.
         * @return {@code this}
         */
        public Builder dtsJobId(java.lang.String dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getDtsJobId}
         * @param dtsJobId Property dtsJobId: The ID of the DTS task.
         * @return {@code this}
         */
        public Builder dtsJobId(com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getErrorNotice}
         * @param errorNotice Property errorNotice: Specifies whether to monitor the task status.
         *                    Valid values: <strong>true</strong> and <strong>false</strong>.
         * @return {@code this}
         */
        public Builder errorNotice(java.lang.Boolean errorNotice) {
            this.errorNotice = errorNotice;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getErrorNotice}
         * @param errorNotice Property errorNotice: Specifies whether to monitor the task status.
         *                    Valid values: <strong>true</strong> and <strong>false</strong>.
         * @return {@code this}
         */
        public Builder errorNotice(com.aliyun.ros.cdk.core.IResolvable errorNotice) {
            this.errorNotice = errorNotice;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getErrorPhone}
         * @param errorPhone Property errorPhone: The mobile numbers that receive status-related alerts.
         *                   Separate multiple mobile numbers with commas (,).
         *                   <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * @return {@code this}
         */
        public Builder errorPhone(java.lang.String errorPhone) {
            this.errorPhone = errorPhone;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getErrorPhone}
         * @param errorPhone Property errorPhone: The mobile numbers that receive status-related alerts.
         *                   Separate multiple mobile numbers with commas (,).
         *                   <strong>Note</strong>: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
         * @return {@code this}
         */
        public Builder errorPhone(com.aliyun.ros.cdk.core.IResolvable errorPhone) {
            this.errorPhone = errorPhone;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getReserve}
         * @param reserve Property reserve: The reserved parameter of DTS.
         *                You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
         * @return {@code this}
         */
        public Builder reserve(com.aliyun.ros.cdk.core.IResolvable reserve) {
            this.reserve = reserve;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getReserve}
         * @param reserve Property reserve: The reserved parameter of DTS.
         *                You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
         * @return {@code this}
         */
        public Builder reserve(java.util.Map<java.lang.String, ? extends java.lang.Object> reserve) {
            this.reserve = reserve;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getStatus}
         * @param status Property status: The status of the resource.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li><strong>Subscribing</strong>: Start the task.</li>
         *               <li><strong>Suspending</strong>: Suspend the task.</li>
         *               <li><strong>Stopping</strong>: Stop the task.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getStatus}
         * @param status Property status: The status of the resource.
         *               Valid values:
         *               <p>
         *               <ul>
         *               <li><strong>Subscribing</strong>: Start the task.</li>
         *               <li><strong>Suspending</strong>: Suspend the task.</li>
         *               <li><strong>Stopping</strong>: Stop the task.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSubscriptionDataType}
         * @param subscriptionDataType Property subscriptionDataType: Subscription data type.
         * @return {@code this}
         */
        public Builder subscriptionDataType(com.aliyun.ros.cdk.core.IResolvable subscriptionDataType) {
            this.subscriptionDataType = subscriptionDataType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionJob2Props#getSubscriptionDataType}
         * @param subscriptionDataType Property subscriptionDataType: Subscription data type.
         * @return {@code this}
         */
        public Builder subscriptionDataType(com.aliyun.ros.cdk.dts.RosSubscriptionJob2.SubscriptionDataTypeProperty subscriptionDataType) {
            this.subscriptionDataType = subscriptionDataType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubscriptionJob2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubscriptionJob2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SubscriptionJob2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionJob2Props {
        private final java.lang.Object dbList;
        private final java.lang.Object dtsJobName;
        private final java.lang.Object sourceEndpoint;
        private final java.lang.Object subscriptionInstance;
        private final java.lang.Object checkpoint;
        private final java.lang.Object dedicatedClusterId;
        private final java.lang.Object delayNotice;
        private final java.lang.Object delayPhone;
        private final java.lang.Object delayRuleTime;
        private final java.lang.Object dtsBisLabel;
        private final java.lang.Object dtsInstanceId;
        private final java.lang.Object dtsJobId;
        private final java.lang.Object errorNotice;
        private final java.lang.Object errorPhone;
        private final java.lang.Object reserve;
        private final java.lang.Object status;
        private final java.lang.Object subscriptionDataType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbList = software.amazon.jsii.Kernel.get(this, "dbList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsJobName = software.amazon.jsii.Kernel.get(this, "dtsJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionInstance = software.amazon.jsii.Kernel.get(this, "subscriptionInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkpoint = software.amazon.jsii.Kernel.get(this, "checkpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayNotice = software.amazon.jsii.Kernel.get(this, "delayNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayPhone = software.amazon.jsii.Kernel.get(this, "delayPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayRuleTime = software.amazon.jsii.Kernel.get(this, "delayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsBisLabel = software.amazon.jsii.Kernel.get(this, "dtsBisLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsInstanceId = software.amazon.jsii.Kernel.get(this, "dtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dtsJobId = software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorNotice = software.amazon.jsii.Kernel.get(this, "errorNotice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorPhone = software.amazon.jsii.Kernel.get(this, "errorPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reserve = software.amazon.jsii.Kernel.get(this, "reserve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionDataType = software.amazon.jsii.Kernel.get(this, "subscriptionDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbList = java.util.Objects.requireNonNull(builder.dbList, "dbList is required");
            this.dtsJobName = java.util.Objects.requireNonNull(builder.dtsJobName, "dtsJobName is required");
            this.sourceEndpoint = java.util.Objects.requireNonNull(builder.sourceEndpoint, "sourceEndpoint is required");
            this.subscriptionInstance = java.util.Objects.requireNonNull(builder.subscriptionInstance, "subscriptionInstance is required");
            this.checkpoint = builder.checkpoint;
            this.dedicatedClusterId = builder.dedicatedClusterId;
            this.delayNotice = builder.delayNotice;
            this.delayPhone = builder.delayPhone;
            this.delayRuleTime = builder.delayRuleTime;
            this.dtsBisLabel = builder.dtsBisLabel;
            this.dtsInstanceId = builder.dtsInstanceId;
            this.dtsJobId = builder.dtsJobId;
            this.errorNotice = builder.errorNotice;
            this.errorPhone = builder.errorPhone;
            this.reserve = builder.reserve;
            this.status = builder.status;
            this.subscriptionDataType = builder.subscriptionDataType;
        }

        @Override
        public final java.lang.Object getDbList() {
            return this.dbList;
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
        public final java.lang.Object getSubscriptionInstance() {
            return this.subscriptionInstance;
        }

        @Override
        public final java.lang.Object getCheckpoint() {
            return this.checkpoint;
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
        public final java.lang.Object getReserve() {
            return this.reserve;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getSubscriptionDataType() {
            return this.subscriptionDataType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbList", om.valueToTree(this.getDbList()));
            data.set("dtsJobName", om.valueToTree(this.getDtsJobName()));
            data.set("sourceEndpoint", om.valueToTree(this.getSourceEndpoint()));
            data.set("subscriptionInstance", om.valueToTree(this.getSubscriptionInstance()));
            if (this.getCheckpoint() != null) {
                data.set("checkpoint", om.valueToTree(this.getCheckpoint()));
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
            if (this.getReserve() != null) {
                data.set("reserve", om.valueToTree(this.getReserve()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getSubscriptionDataType() != null) {
                data.set("subscriptionDataType", om.valueToTree(this.getSubscriptionDataType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.SubscriptionJob2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubscriptionJob2Props.Jsii$Proxy that = (SubscriptionJob2Props.Jsii$Proxy) o;

            if (!dbList.equals(that.dbList)) return false;
            if (!dtsJobName.equals(that.dtsJobName)) return false;
            if (!sourceEndpoint.equals(that.sourceEndpoint)) return false;
            if (!subscriptionInstance.equals(that.subscriptionInstance)) return false;
            if (this.checkpoint != null ? !this.checkpoint.equals(that.checkpoint) : that.checkpoint != null) return false;
            if (this.dedicatedClusterId != null ? !this.dedicatedClusterId.equals(that.dedicatedClusterId) : that.dedicatedClusterId != null) return false;
            if (this.delayNotice != null ? !this.delayNotice.equals(that.delayNotice) : that.delayNotice != null) return false;
            if (this.delayPhone != null ? !this.delayPhone.equals(that.delayPhone) : that.delayPhone != null) return false;
            if (this.delayRuleTime != null ? !this.delayRuleTime.equals(that.delayRuleTime) : that.delayRuleTime != null) return false;
            if (this.dtsBisLabel != null ? !this.dtsBisLabel.equals(that.dtsBisLabel) : that.dtsBisLabel != null) return false;
            if (this.dtsInstanceId != null ? !this.dtsInstanceId.equals(that.dtsInstanceId) : that.dtsInstanceId != null) return false;
            if (this.dtsJobId != null ? !this.dtsJobId.equals(that.dtsJobId) : that.dtsJobId != null) return false;
            if (this.errorNotice != null ? !this.errorNotice.equals(that.errorNotice) : that.errorNotice != null) return false;
            if (this.errorPhone != null ? !this.errorPhone.equals(that.errorPhone) : that.errorPhone != null) return false;
            if (this.reserve != null ? !this.reserve.equals(that.reserve) : that.reserve != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            return this.subscriptionDataType != null ? this.subscriptionDataType.equals(that.subscriptionDataType) : that.subscriptionDataType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbList.hashCode();
            result = 31 * result + (this.dtsJobName.hashCode());
            result = 31 * result + (this.sourceEndpoint.hashCode());
            result = 31 * result + (this.subscriptionInstance.hashCode());
            result = 31 * result + (this.checkpoint != null ? this.checkpoint.hashCode() : 0);
            result = 31 * result + (this.dedicatedClusterId != null ? this.dedicatedClusterId.hashCode() : 0);
            result = 31 * result + (this.delayNotice != null ? this.delayNotice.hashCode() : 0);
            result = 31 * result + (this.delayPhone != null ? this.delayPhone.hashCode() : 0);
            result = 31 * result + (this.delayRuleTime != null ? this.delayRuleTime.hashCode() : 0);
            result = 31 * result + (this.dtsBisLabel != null ? this.dtsBisLabel.hashCode() : 0);
            result = 31 * result + (this.dtsInstanceId != null ? this.dtsInstanceId.hashCode() : 0);
            result = 31 * result + (this.dtsJobId != null ? this.dtsJobId.hashCode() : 0);
            result = 31 * result + (this.errorNotice != null ? this.errorNotice.hashCode() : 0);
            result = 31 * result + (this.errorPhone != null ? this.errorPhone.hashCode() : 0);
            result = 31 * result + (this.reserve != null ? this.reserve.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.subscriptionDataType != null ? this.subscriptionDataType.hashCode() : 0);
            return result;
        }
    }
}
