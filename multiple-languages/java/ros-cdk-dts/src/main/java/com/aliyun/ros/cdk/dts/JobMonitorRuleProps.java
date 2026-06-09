package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>JobMonitorRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:29:50.786Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.JobMonitorRuleProps")
@software.amazon.jsii.Jsii.Proxy(JobMonitorRuleProps.Jsii$Proxy.class)
public interface JobMonitorRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDtsJobId();

    /**
     * Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm.
     * <p>
     * <ul>
     * <li><strong>error</strong>: abnormal alarm.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelayRuleTime() {
        return null;
    }

    /**
     * Property period: The statistical period of the incremental verification task.
     * <p>
     * Unit: minutes.
     * <p>
     * <blockquote>
     * <p>
     * currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property phones: The alarm is triggered after notification of the contact phone number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhones() {
        return null;
    }

    /**
     * Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable.
     * <p>
     * <ul>
     * <li><strong>N</strong>: Inactive.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getState() {
        return null;
    }

    /**
     * Property times: The number of cycles of the incremental verification task.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link JobMonitorRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link JobMonitorRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<JobMonitorRuleProps> {
        java.lang.Object dtsJobId;
        java.lang.Object type;
        java.lang.Object delayRuleTime;
        java.lang.Object period;
        java.lang.Object phones;
        java.lang.Object state;
        java.lang.Object times;

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobId(java.lang.String dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDtsJobId}
         * @param dtsJobId Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get. This parameter is required.
         * @return {@code this}
         */
        public Builder dtsJobId(com.aliyun.ros.cdk.core.IResolvable dtsJobId) {
            this.dtsJobId = dtsJobId;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getType}
         * @param type Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm. This parameter is required.
         *             <ul>
         *             <li><strong>error</strong>: abnormal alarm.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getType}
         * @param type Property type: Monitoring rules of type, the return value: - <strong>delay</strong>: delay alarm. This parameter is required.
         *             <ul>
         *             <li><strong>error</strong>: abnormal alarm.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDelayRuleTime}
         * @param delayRuleTime Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         * @return {@code this}
         */
        public Builder delayRuleTime(java.lang.Number delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getDelayRuleTime}
         * @param delayRuleTime Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
         * @return {@code this}
         */
        public Builder delayRuleTime(com.aliyun.ros.cdk.core.IResolvable delayRuleTime) {
            this.delayRuleTime = delayRuleTime;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getPeriod}
         * @param period Property period: The statistical period of the incremental verification task.
         *               Unit: minutes.
         *               <p>
         *               <blockquote>
         *               <p>
         *               currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getPeriod}
         * @param period Property period: The statistical period of the incremental verification task.
         *               Unit: minutes.
         *               <p>
         *               <blockquote>
         *               <p>
         *               currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getPhones}
         * @param phones Property phones: The alarm is triggered after notification of the contact phone number.
         * @return {@code this}
         */
        public Builder phones(java.util.List<? extends java.lang.Object> phones) {
            this.phones = phones;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getPhones}
         * @param phones Property phones: The alarm is triggered after notification of the contact phone number.
         * @return {@code this}
         */
        public Builder phones(com.aliyun.ros.cdk.core.IResolvable phones) {
            this.phones = phones;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getState}
         * @param state Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable.
         *              <ul>
         *              <li><strong>N</strong>: Inactive.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getState}
         * @param state Property state: Whether to enable monitoring rules, return value: - <strong>Y</strong>: enable.
         *              <ul>
         *              <li><strong>N</strong>: Inactive.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getTimes}
         * @param times Property times: The number of cycles of the incremental verification task.
         * @return {@code this}
         */
        public Builder times(java.lang.Number times) {
            this.times = times;
            return this;
        }

        /**
         * Sets the value of {@link JobMonitorRuleProps#getTimes}
         * @param times Property times: The number of cycles of the incremental verification task.
         * @return {@code this}
         */
        public Builder times(com.aliyun.ros.cdk.core.IResolvable times) {
            this.times = times;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link JobMonitorRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public JobMonitorRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link JobMonitorRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JobMonitorRuleProps {
        private final java.lang.Object dtsJobId;
        private final java.lang.Object type;
        private final java.lang.Object delayRuleTime;
        private final java.lang.Object period;
        private final java.lang.Object phones;
        private final java.lang.Object state;
        private final java.lang.Object times;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dtsJobId = software.amazon.jsii.Kernel.get(this, "dtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delayRuleTime = software.amazon.jsii.Kernel.get(this, "delayRuleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phones = software.amazon.jsii.Kernel.get(this, "phones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.times = software.amazon.jsii.Kernel.get(this, "times", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dtsJobId = java.util.Objects.requireNonNull(builder.dtsJobId, "dtsJobId is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.delayRuleTime = builder.delayRuleTime;
            this.period = builder.period;
            this.phones = builder.phones;
            this.state = builder.state;
            this.times = builder.times;
        }

        @Override
        public final java.lang.Object getDtsJobId() {
            return this.dtsJobId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getDelayRuleTime() {
            return this.delayRuleTime;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPhones() {
            return this.phones;
        }

        @Override
        public final java.lang.Object getState() {
            return this.state;
        }

        @Override
        public final java.lang.Object getTimes() {
            return this.times;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dtsJobId", om.valueToTree(this.getDtsJobId()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getDelayRuleTime() != null) {
                data.set("delayRuleTime", om.valueToTree(this.getDelayRuleTime()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPhones() != null) {
                data.set("phones", om.valueToTree(this.getPhones()));
            }
            if (this.getState() != null) {
                data.set("state", om.valueToTree(this.getState()));
            }
            if (this.getTimes() != null) {
                data.set("times", om.valueToTree(this.getTimes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.JobMonitorRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            JobMonitorRuleProps.Jsii$Proxy that = (JobMonitorRuleProps.Jsii$Proxy) o;

            if (!dtsJobId.equals(that.dtsJobId)) return false;
            if (!type.equals(that.type)) return false;
            if (this.delayRuleTime != null ? !this.delayRuleTime.equals(that.delayRuleTime) : that.delayRuleTime != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.phones != null ? !this.phones.equals(that.phones) : that.phones != null) return false;
            if (this.state != null ? !this.state.equals(that.state) : that.state != null) return false;
            return this.times != null ? this.times.equals(that.times) : that.times == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dtsJobId.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.delayRuleTime != null ? this.delayRuleTime.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.phones != null ? this.phones.hashCode() : 0);
            result = 31 * result + (this.state != null ? this.state.hashCode() : 0);
            result = 31 * result + (this.times != null ? this.times.hashCode() : 0);
            return result;
        }
    }
}
