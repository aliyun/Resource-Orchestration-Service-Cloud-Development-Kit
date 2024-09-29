package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosApplicationMonitor</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.103Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosApplicationMonitorProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationMonitorProps.Jsii$Proxy.class)
public interface RosApplicationMonitorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddress();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectThreshold() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetectTimes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptionsJson() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationMonitorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationMonitorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationMonitorProps> {
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
         * Sets the value of {@link RosApplicationMonitorProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getAddress}
         * @param address the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder address(java.lang.String address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getAddress}
         * @param address the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder address(com.aliyun.ros.cdk.core.IResolvable address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectEnable}
         * @param detectEnable the value to be set.
         * @return {@code this}
         */
        public Builder detectEnable(java.lang.Boolean detectEnable) {
            this.detectEnable = detectEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectEnable}
         * @param detectEnable the value to be set.
         * @return {@code this}
         */
        public Builder detectEnable(com.aliyun.ros.cdk.core.IResolvable detectEnable) {
            this.detectEnable = detectEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectThreshold}
         * @param detectThreshold the value to be set.
         * @return {@code this}
         */
        public Builder detectThreshold(java.lang.Number detectThreshold) {
            this.detectThreshold = detectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectThreshold}
         * @param detectThreshold the value to be set.
         * @return {@code this}
         */
        public Builder detectThreshold(com.aliyun.ros.cdk.core.IResolvable detectThreshold) {
            this.detectThreshold = detectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectTimes}
         * @param detectTimes the value to be set.
         * @return {@code this}
         */
        public Builder detectTimes(java.lang.Number detectTimes) {
            this.detectTimes = detectTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getDetectTimes}
         * @param detectTimes the value to be set.
         * @return {@code this}
         */
        public Builder detectTimes(com.aliyun.ros.cdk.core.IResolvable detectTimes) {
            this.detectTimes = detectTimes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getOptionsJson}
         * @param optionsJson the value to be set.
         * @return {@code this}
         */
        public Builder optionsJson(com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getOptionsJson}
         * @param optionsJson the value to be set.
         * @return {@code this}
         */
        public Builder optionsJson(java.util.Map<java.lang.String, ? extends java.lang.Object> optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getSilenceTime}
         * @param silenceTime the value to be set.
         * @return {@code this}
         */
        public Builder silenceTime(java.lang.Number silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationMonitorProps#getSilenceTime}
         * @param silenceTime the value to be set.
         * @return {@code this}
         */
        public Builder silenceTime(com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationMonitorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationMonitorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationMonitorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationMonitorProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosApplicationMonitorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationMonitorProps.Jsii$Proxy that = (RosApplicationMonitorProps.Jsii$Proxy) o;

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
