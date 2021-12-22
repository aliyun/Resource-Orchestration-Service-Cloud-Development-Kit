package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScheduledTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:58.023Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScheduledTaskProps")
@software.amazon.jsii.Jsii.Proxy(ScheduledTaskProps.Jsii$Proxy.class)
public interface ScheduledTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property launchTime: Time point at which the scheduled task is triggered.
     * <p>
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLaunchTime();

    /**
     * Property scheduledAction: Operations performed when the scheduled task is triggered.
     * <p>
     * Fill in the unique identifier of the scaling rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduledAction();

    /**
     * Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * <p>
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchExpirationTime() {
        return null;
    }

    /**
     * Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * <p>
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceEndTime() {
        return null;
    }

    /**
     * Property recurrenceType: Type of the scheduled task to be repeated.
     * <p>
     * Optional values:
     * <p>
     * <ul>
     * <li>Daily: Recurrence interval by day for a scheduled task.</li>
     * <li>Weekly: Recurrence interval by week for a scheduled task.</li>
     * <li>Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceType() {
        return null;
    }

    /**
     * Property recurrenceValue: Value of the scheduled task to be repeated.
     * <p>
     * <ul>
     * <li>Daily: Only one value in the range [1,31] can be filled.</li>
     * <li>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</li>
     * <li>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceValue() {
        return null;
    }

    /**
     * Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.
     * <p>
     * It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduledTaskName() {
        return null;
    }

    /**
     * Property taskEnabled: Whether to enable the scheduled task.
     * <p>
     * <ul>
     * <li>When the parameter is set to true, the task is enabled.</li>
     * <li>When the parameter is set to false, the task is disabled.
     * The default value is true.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaskEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScheduledTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScheduledTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScheduledTaskProps> {
        java.lang.Object launchTime;
        java.lang.Object scheduledAction;
        java.lang.Object description;
        java.lang.Object launchExpirationTime;
        java.lang.Object recurrenceEndTime;
        java.lang.Object recurrenceType;
        java.lang.Object recurrenceValue;
        java.lang.Object scheduledTaskName;
        java.lang.Object taskEnabled;

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchTime}
         * @param launchTime Property launchTime: Time point at which the scheduled task is triggered. This parameter is required.
         *                   The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         *                   If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
         *                   A time point 90 days after creation or modification cannot be entered.
         * @return {@code this}
         */
        public Builder launchTime(java.lang.String launchTime) {
            this.launchTime = launchTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchTime}
         * @param launchTime Property launchTime: Time point at which the scheduled task is triggered. This parameter is required.
         *                   The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         *                   If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
         *                   A time point 90 days after creation or modification cannot be entered.
         * @return {@code this}
         */
        public Builder launchTime(com.aliyun.ros.cdk.core.IResolvable launchTime) {
            this.launchTime = launchTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledAction}
         * @param scheduledAction Property scheduledAction: Operations performed when the scheduled task is triggered. This parameter is required.
         *                        Fill in the unique identifier of the scaling rule.
         * @return {@code this}
         */
        public Builder scheduledAction(java.lang.String scheduledAction) {
            this.scheduledAction = scheduledAction;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledAction}
         * @param scheduledAction Property scheduledAction: Operations performed when the scheduled task is triggered. This parameter is required.
         *                        Fill in the unique identifier of the scaling rule.
         * @return {@code this}
         */
        public Builder scheduledAction(com.aliyun.ros.cdk.core.IResolvable scheduledAction) {
            this.scheduledAction = scheduledAction;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getDescription}
         * @param description Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getDescription}
         * @param description Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchExpirationTime}
         * @param launchExpirationTime Property launchExpirationTime: Time period within which the failed scheduled task is retried.
         *                             The default value is 600s.
         *                             Value range: [0, 21600]
         * @return {@code this}
         */
        public Builder launchExpirationTime(java.lang.Number launchExpirationTime) {
            this.launchExpirationTime = launchExpirationTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchExpirationTime}
         * @param launchExpirationTime Property launchExpirationTime: Time period within which the failed scheduled task is retried.
         *                             The default value is 600s.
         *                             Value range: [0, 21600]
         * @return {@code this}
         */
        public Builder launchExpirationTime(com.aliyun.ros.cdk.core.IResolvable launchExpirationTime) {
            this.launchExpirationTime = launchExpirationTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceEndTime}
         * @param recurrenceEndTime Property recurrenceEndTime: End time of the scheduled task to be repeated.
         *                          The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         *                          A time point 90 days after creation or modification cannot be entered.
         *                          RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
         * @return {@code this}
         */
        public Builder recurrenceEndTime(java.lang.String recurrenceEndTime) {
            this.recurrenceEndTime = recurrenceEndTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceEndTime}
         * @param recurrenceEndTime Property recurrenceEndTime: End time of the scheduled task to be repeated.
         *                          The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
         *                          A time point 90 days after creation or modification cannot be entered.
         *                          RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
         * @return {@code this}
         */
        public Builder recurrenceEndTime(com.aliyun.ros.cdk.core.IResolvable recurrenceEndTime) {
            this.recurrenceEndTime = recurrenceEndTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceType}
         * @param recurrenceType Property recurrenceType: Type of the scheduled task to be repeated.
         *                       Optional values:
         *                       <p>
         *                       <ul>
         *                       <li>Daily: Recurrence interval by day for a scheduled task.</li>
         *                       <li>Weekly: Recurrence interval by week for a scheduled task.</li>
         *                       <li>Monthly: Recurrence interval by month for a scheduled task.
         *                       RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder recurrenceType(java.lang.String recurrenceType) {
            this.recurrenceType = recurrenceType;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceType}
         * @param recurrenceType Property recurrenceType: Type of the scheduled task to be repeated.
         *                       Optional values:
         *                       <p>
         *                       <ul>
         *                       <li>Daily: Recurrence interval by day for a scheduled task.</li>
         *                       <li>Weekly: Recurrence interval by week for a scheduled task.</li>
         *                       <li>Monthly: Recurrence interval by month for a scheduled task.
         *                       RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder recurrenceType(com.aliyun.ros.cdk.core.IResolvable recurrenceType) {
            this.recurrenceType = recurrenceType;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceValue}
         * @param recurrenceValue Property recurrenceValue: Value of the scheduled task to be repeated.
         *                        <ul>
         *                        <li>Daily: Only one value in the range [1,31] can be filled.</li>
         *                        <li>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</li>
         *                        <li>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
         *                        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder recurrenceValue(java.lang.String recurrenceValue) {
            this.recurrenceValue = recurrenceValue;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceValue}
         * @param recurrenceValue Property recurrenceValue: Value of the scheduled task to be repeated.
         *                        <ul>
         *                        <li>Daily: Only one value in the range [1,31] can be filled.</li>
         *                        <li>Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".</li>
         *                        <li>Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
         *                        RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder recurrenceValue(com.aliyun.ros.cdk.core.IResolvable recurrenceValue) {
            this.recurrenceValue = recurrenceValue;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledTaskName}
         * @param scheduledTaskName Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.
         *                          It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
         *                          The account name is unique in the same region.
         *                          If this parameter is not specified, the default value ScheduledScalingTaskId is used.
         * @return {@code this}
         */
        public Builder scheduledTaskName(java.lang.String scheduledTaskName) {
            this.scheduledTaskName = scheduledTaskName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledTaskName}
         * @param scheduledTaskName Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long.
         *                          It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
         *                          The account name is unique in the same region.
         *                          If this parameter is not specified, the default value ScheduledScalingTaskId is used.
         * @return {@code this}
         */
        public Builder scheduledTaskName(com.aliyun.ros.cdk.core.IResolvable scheduledTaskName) {
            this.scheduledTaskName = scheduledTaskName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getTaskEnabled}
         * @param taskEnabled Property taskEnabled: Whether to enable the scheduled task.
         *                    <ul>
         *                    <li>When the parameter is set to true, the task is enabled.</li>
         *                    <li>When the parameter is set to false, the task is disabled.
         *                    The default value is true.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder taskEnabled(java.lang.Boolean taskEnabled) {
            this.taskEnabled = taskEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getTaskEnabled}
         * @param taskEnabled Property taskEnabled: Whether to enable the scheduled task.
         *                    <ul>
         *                    <li>When the parameter is set to true, the task is enabled.</li>
         *                    <li>When the parameter is set to false, the task is disabled.
         *                    The default value is true.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder taskEnabled(com.aliyun.ros.cdk.core.IResolvable taskEnabled) {
            this.taskEnabled = taskEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScheduledTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScheduledTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScheduledTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduledTaskProps {
        private final java.lang.Object launchTime;
        private final java.lang.Object scheduledAction;
        private final java.lang.Object description;
        private final java.lang.Object launchExpirationTime;
        private final java.lang.Object recurrenceEndTime;
        private final java.lang.Object recurrenceType;
        private final java.lang.Object recurrenceValue;
        private final java.lang.Object scheduledTaskName;
        private final java.lang.Object taskEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTime = software.amazon.jsii.Kernel.get(this, "launchTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduledAction = software.amazon.jsii.Kernel.get(this, "scheduledAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchExpirationTime = software.amazon.jsii.Kernel.get(this, "launchExpirationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recurrenceEndTime = software.amazon.jsii.Kernel.get(this, "recurrenceEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recurrenceType = software.amazon.jsii.Kernel.get(this, "recurrenceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recurrenceValue = software.amazon.jsii.Kernel.get(this, "recurrenceValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduledTaskName = software.amazon.jsii.Kernel.get(this, "scheduledTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskEnabled = software.amazon.jsii.Kernel.get(this, "taskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTime = java.util.Objects.requireNonNull(builder.launchTime, "launchTime is required");
            this.scheduledAction = java.util.Objects.requireNonNull(builder.scheduledAction, "scheduledAction is required");
            this.description = builder.description;
            this.launchExpirationTime = builder.launchExpirationTime;
            this.recurrenceEndTime = builder.recurrenceEndTime;
            this.recurrenceType = builder.recurrenceType;
            this.recurrenceValue = builder.recurrenceValue;
            this.scheduledTaskName = builder.scheduledTaskName;
            this.taskEnabled = builder.taskEnabled;
        }

        @Override
        public final java.lang.Object getLaunchTime() {
            return this.launchTime;
        }

        @Override
        public final java.lang.Object getScheduledAction() {
            return this.scheduledAction;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLaunchExpirationTime() {
            return this.launchExpirationTime;
        }

        @Override
        public final java.lang.Object getRecurrenceEndTime() {
            return this.recurrenceEndTime;
        }

        @Override
        public final java.lang.Object getRecurrenceType() {
            return this.recurrenceType;
        }

        @Override
        public final java.lang.Object getRecurrenceValue() {
            return this.recurrenceValue;
        }

        @Override
        public final java.lang.Object getScheduledTaskName() {
            return this.scheduledTaskName;
        }

        @Override
        public final java.lang.Object getTaskEnabled() {
            return this.taskEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("launchTime", om.valueToTree(this.getLaunchTime()));
            data.set("scheduledAction", om.valueToTree(this.getScheduledAction()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLaunchExpirationTime() != null) {
                data.set("launchExpirationTime", om.valueToTree(this.getLaunchExpirationTime()));
            }
            if (this.getRecurrenceEndTime() != null) {
                data.set("recurrenceEndTime", om.valueToTree(this.getRecurrenceEndTime()));
            }
            if (this.getRecurrenceType() != null) {
                data.set("recurrenceType", om.valueToTree(this.getRecurrenceType()));
            }
            if (this.getRecurrenceValue() != null) {
                data.set("recurrenceValue", om.valueToTree(this.getRecurrenceValue()));
            }
            if (this.getScheduledTaskName() != null) {
                data.set("scheduledTaskName", om.valueToTree(this.getScheduledTaskName()));
            }
            if (this.getTaskEnabled() != null) {
                data.set("taskEnabled", om.valueToTree(this.getTaskEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ScheduledTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScheduledTaskProps.Jsii$Proxy that = (ScheduledTaskProps.Jsii$Proxy) o;

            if (!launchTime.equals(that.launchTime)) return false;
            if (!scheduledAction.equals(that.scheduledAction)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.launchExpirationTime != null ? !this.launchExpirationTime.equals(that.launchExpirationTime) : that.launchExpirationTime != null) return false;
            if (this.recurrenceEndTime != null ? !this.recurrenceEndTime.equals(that.recurrenceEndTime) : that.recurrenceEndTime != null) return false;
            if (this.recurrenceType != null ? !this.recurrenceType.equals(that.recurrenceType) : that.recurrenceType != null) return false;
            if (this.recurrenceValue != null ? !this.recurrenceValue.equals(that.recurrenceValue) : that.recurrenceValue != null) return false;
            if (this.scheduledTaskName != null ? !this.scheduledTaskName.equals(that.scheduledTaskName) : that.scheduledTaskName != null) return false;
            return this.taskEnabled != null ? this.taskEnabled.equals(that.taskEnabled) : that.taskEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.launchTime.hashCode();
            result = 31 * result + (this.scheduledAction.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.launchExpirationTime != null ? this.launchExpirationTime.hashCode() : 0);
            result = 31 * result + (this.recurrenceEndTime != null ? this.recurrenceEndTime.hashCode() : 0);
            result = 31 * result + (this.recurrenceType != null ? this.recurrenceType.hashCode() : 0);
            result = 31 * result + (this.recurrenceValue != null ? this.recurrenceValue.hashCode() : 0);
            result = 31 * result + (this.scheduledTaskName != null ? this.scheduledTaskName.hashCode() : 0);
            result = 31 * result + (this.taskEnabled != null ? this.taskEnabled.hashCode() : 0);
            return result;
        }
    }
}
