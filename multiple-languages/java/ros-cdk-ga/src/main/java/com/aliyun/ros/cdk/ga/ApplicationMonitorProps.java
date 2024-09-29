package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>ApplicationMonitor</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.025Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ApplicationMonitorProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationMonitorProps.Jsii$Proxy.class)
public interface ApplicationMonitorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property address: The URL or IP address that you want to probe.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddress();

    /**
     * Property listenerId: The ID of the listener on which you want to perform the origin probing task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     * Property taskName: The name of the origin probing task.
     * <p>
     * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     * Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectEnable() {
        return null;
    }

    /**
     * Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
     * <p>
     * Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectThreshold() {
        return null;
    }

    /**
     * Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
     * <p>
     * Valid values: 1 to 20. Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectTimes() {
        return null;
    }

    /**
     * Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
     * <p>
     * The options vary based on the listener protocol.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptionsJson() {
        return null;
    }

    /**
     * Property silenceTime: The silence period of the automatic diagnostics feature.
     * <p>
     * This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationMonitorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationMonitorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationMonitorProps> {
        java.lang.Object acceleratorId;
        java.lang.Object address;
        java.lang.Object listenerId;
        java.lang.Object taskName;
        java.lang.Object detectEnable;
        java.lang.Object detectThreshold;
        java.lang.Object detectTimes;
        java.lang.Object optionsJson;
        java.lang.Object silenceTime;

        /**
         * Sets the value of {@link ApplicationMonitorProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance on which you want to perform the origin probing task. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getAddress}
         * @param address Property address: The URL or IP address that you want to probe. This parameter is required.
         * @return {@code this}
         */
        public Builder address(java.lang.String address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getAddress}
         * @param address Property address: The URL or IP address that you want to probe. This parameter is required.
         * @return {@code this}
         */
        public Builder address(com.aliyun.ros.cdk.core.IResolvable address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener on which you want to perform the origin probing task. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getListenerId}
         * @param listenerId Property listenerId: The ID of the listener on which you want to perform the origin probing task. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getTaskName}
         * @param taskName Property taskName: The name of the origin probing task. This parameter is required.
         *                 The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getTaskName}
         * @param taskName Property taskName: The name of the origin probing task. This parameter is required.
         *                 The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectEnable}
         * @param detectEnable Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
         * @return {@code this}
         */
        public Builder detectEnable(java.lang.Boolean detectEnable) {
            this.detectEnable = detectEnable;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectEnable}
         * @param detectEnable Property detectEnable: Specifies whether to enable the automatic diagnostics feature.
         * @return {@code this}
         */
        public Builder detectEnable(com.aliyun.ros.cdk.core.IResolvable detectEnable) {
            this.detectEnable = detectEnable;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectThreshold}
         * @param detectThreshold Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
         *                        Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
         * @return {@code this}
         */
        public Builder detectThreshold(java.lang.Number detectThreshold) {
            this.detectThreshold = detectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectThreshold}
         * @param detectThreshold Property detectThreshold: The threshold that is used to trigger the automatic diagnostics feature.
         *                        Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
         * @return {@code this}
         */
        public Builder detectThreshold(com.aliyun.ros.cdk.core.IResolvable detectThreshold) {
            this.detectThreshold = detectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectTimes}
         * @param detectTimes Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
         *                    Valid values: 1 to 20. Default value: 1.
         * @return {@code this}
         */
        public Builder detectTimes(java.lang.Number detectTimes) {
            this.detectTimes = detectTimes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getDetectTimes}
         * @param detectTimes Property detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
         *                    Valid values: 1 to 20. Default value: 1.
         * @return {@code this}
         */
        public Builder detectTimes(com.aliyun.ros.cdk.core.IResolvable detectTimes) {
            this.detectTimes = detectTimes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getOptionsJson}
         * @param optionsJson Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
         *                    The options vary based on the listener protocol.
         * @return {@code this}
         */
        public Builder optionsJson(com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getOptionsJson}
         * @param optionsJson Property optionsJson: The extended options of the listener protocol that is used by the origin probing task.
         *                    The options vary based on the listener protocol.
         * @return {@code this}
         */
        public Builder optionsJson(java.util.Map<java.lang.String, ? extends java.lang.Object> optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getSilenceTime}
         * @param silenceTime Property silenceTime: The silence period of the automatic diagnostics feature.
         *                    This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
         * @return {@code this}
         */
        public Builder silenceTime(java.lang.Number silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationMonitorProps#getSilenceTime}
         * @param silenceTime Property silenceTime: The silence period of the automatic diagnostics feature.
         *                    This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
         * @return {@code this}
         */
        public Builder silenceTime(com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationMonitorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationMonitorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationMonitorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationMonitorProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object address;
        private final java.lang.Object listenerId;
        private final java.lang.Object taskName;
        private final java.lang.Object detectEnable;
        private final java.lang.Object detectThreshold;
        private final java.lang.Object detectTimes;
        private final java.lang.Object optionsJson;
        private final java.lang.Object silenceTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.address = software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskName = software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detectEnable = software.amazon.jsii.Kernel.get(this, "detectEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detectThreshold = software.amazon.jsii.Kernel.get(this, "detectThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detectTimes = software.amazon.jsii.Kernel.get(this, "detectTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.optionsJson = software.amazon.jsii.Kernel.get(this, "optionsJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.silenceTime = software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.address = java.util.Objects.requireNonNull(builder.address, "address is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
            this.taskName = java.util.Objects.requireNonNull(builder.taskName, "taskName is required");
            this.detectEnable = builder.detectEnable;
            this.detectThreshold = builder.detectThreshold;
            this.detectTimes = builder.detectTimes;
            this.optionsJson = builder.optionsJson;
            this.silenceTime = builder.silenceTime;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getAddress() {
            return this.address;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.Object getTaskName() {
            return this.taskName;
        }

        @Override
        public final java.lang.Object getDetectEnable() {
            return this.detectEnable;
        }

        @Override
        public final java.lang.Object getDetectThreshold() {
            return this.detectThreshold;
        }

        @Override
        public final java.lang.Object getDetectTimes() {
            return this.detectTimes;
        }

        @Override
        public final java.lang.Object getOptionsJson() {
            return this.optionsJson;
        }

        @Override
        public final java.lang.Object getSilenceTime() {
            return this.silenceTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("address", om.valueToTree(this.getAddress()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));
            data.set("taskName", om.valueToTree(this.getTaskName()));
            if (this.getDetectEnable() != null) {
                data.set("detectEnable", om.valueToTree(this.getDetectEnable()));
            }
            if (this.getDetectThreshold() != null) {
                data.set("detectThreshold", om.valueToTree(this.getDetectThreshold()));
            }
            if (this.getDetectTimes() != null) {
                data.set("detectTimes", om.valueToTree(this.getDetectTimes()));
            }
            if (this.getOptionsJson() != null) {
                data.set("optionsJson", om.valueToTree(this.getOptionsJson()));
            }
            if (this.getSilenceTime() != null) {
                data.set("silenceTime", om.valueToTree(this.getSilenceTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.ApplicationMonitorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationMonitorProps.Jsii$Proxy that = (ApplicationMonitorProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!address.equals(that.address)) return false;
            if (!listenerId.equals(that.listenerId)) return false;
            if (!taskName.equals(that.taskName)) return false;
            if (this.detectEnable != null ? !this.detectEnable.equals(that.detectEnable) : that.detectEnable != null) return false;
            if (this.detectThreshold != null ? !this.detectThreshold.equals(that.detectThreshold) : that.detectThreshold != null) return false;
            if (this.detectTimes != null ? !this.detectTimes.equals(that.detectTimes) : that.detectTimes != null) return false;
            if (this.optionsJson != null ? !this.optionsJson.equals(that.optionsJson) : that.optionsJson != null) return false;
            return this.silenceTime != null ? this.silenceTime.equals(that.silenceTime) : that.silenceTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.address.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            result = 31 * result + (this.taskName.hashCode());
            result = 31 * result + (this.detectEnable != null ? this.detectEnable.hashCode() : 0);
            result = 31 * result + (this.detectThreshold != null ? this.detectThreshold.hashCode() : 0);
            result = 31 * result + (this.detectTimes != null ? this.detectTimes.hashCode() : 0);
            result = 31 * result + (this.optionsJson != null ? this.optionsJson.hashCode() : 0);
            result = 31 * result + (this.silenceTime != null ? this.silenceTime.hashCode() : 0);
            return result;
        }
    }
}
