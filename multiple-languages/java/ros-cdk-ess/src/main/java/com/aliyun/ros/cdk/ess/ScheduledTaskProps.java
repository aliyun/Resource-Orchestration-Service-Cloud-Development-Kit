package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScheduledTask`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.929Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScheduledTaskProps")
@software.amazon.jsii.Jsii.Proxy(ScheduledTaskProps.Jsii$Proxy.class)
public interface ScheduledTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLaunchTime();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getScheduledAction();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getLaunchExpirationTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRecurrenceEndTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRecurrenceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRecurrenceValue() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getScheduledTaskName() {
        return null;
    }

    /**
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
        private java.lang.String launchTime;
        private java.lang.String scheduledAction;
        private java.lang.String description;
        private java.lang.Number launchExpirationTime;
        private java.lang.String recurrenceEndTime;
        private java.lang.String recurrenceType;
        private java.lang.String recurrenceValue;
        private java.lang.String scheduledTaskName;
        private java.lang.Object taskEnabled;

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchTime}
         * @param launchTime the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTime(java.lang.String launchTime) {
            this.launchTime = launchTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledAction}
         * @param scheduledAction the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduledAction(java.lang.String scheduledAction) {
            this.scheduledAction = scheduledAction;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getLaunchExpirationTime}
         * @param launchExpirationTime the value to be set.
         * @return {@code this}
         */
        public Builder launchExpirationTime(java.lang.Number launchExpirationTime) {
            this.launchExpirationTime = launchExpirationTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceEndTime}
         * @param recurrenceEndTime the value to be set.
         * @return {@code this}
         */
        public Builder recurrenceEndTime(java.lang.String recurrenceEndTime) {
            this.recurrenceEndTime = recurrenceEndTime;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceType}
         * @param recurrenceType the value to be set.
         * @return {@code this}
         */
        public Builder recurrenceType(java.lang.String recurrenceType) {
            this.recurrenceType = recurrenceType;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getRecurrenceValue}
         * @param recurrenceValue the value to be set.
         * @return {@code this}
         */
        public Builder recurrenceValue(java.lang.String recurrenceValue) {
            this.recurrenceValue = recurrenceValue;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getScheduledTaskName}
         * @param scheduledTaskName the value to be set.
         * @return {@code this}
         */
        public Builder scheduledTaskName(java.lang.String scheduledTaskName) {
            this.scheduledTaskName = scheduledTaskName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getTaskEnabled}
         * @param taskEnabled the value to be set.
         * @return {@code this}
         */
        public Builder taskEnabled(java.lang.Boolean taskEnabled) {
            this.taskEnabled = taskEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ScheduledTaskProps#getTaskEnabled}
         * @param taskEnabled the value to be set.
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
            return new Jsii$Proxy(launchTime, scheduledAction, description, launchExpirationTime, recurrenceEndTime, recurrenceType, recurrenceValue, scheduledTaskName, taskEnabled);
        }
    }

    /**
     * An implementation for {@link ScheduledTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduledTaskProps {
        private final java.lang.String launchTime;
        private final java.lang.String scheduledAction;
        private final java.lang.String description;
        private final java.lang.Number launchExpirationTime;
        private final java.lang.String recurrenceEndTime;
        private final java.lang.String recurrenceType;
        private final java.lang.String recurrenceValue;
        private final java.lang.String scheduledTaskName;
        private final java.lang.Object taskEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTime = software.amazon.jsii.Kernel.get(this, "launchTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scheduledAction = software.amazon.jsii.Kernel.get(this, "scheduledAction", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.launchExpirationTime = software.amazon.jsii.Kernel.get(this, "launchExpirationTime", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.recurrenceEndTime = software.amazon.jsii.Kernel.get(this, "recurrenceEndTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.recurrenceType = software.amazon.jsii.Kernel.get(this, "recurrenceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.recurrenceValue = software.amazon.jsii.Kernel.get(this, "recurrenceValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scheduledTaskName = software.amazon.jsii.Kernel.get(this, "scheduledTaskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.taskEnabled = software.amazon.jsii.Kernel.get(this, "taskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String launchTime, final java.lang.String scheduledAction, final java.lang.String description, final java.lang.Number launchExpirationTime, final java.lang.String recurrenceEndTime, final java.lang.String recurrenceType, final java.lang.String recurrenceValue, final java.lang.String scheduledTaskName, final java.lang.Object taskEnabled) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTime = java.util.Objects.requireNonNull(launchTime, "launchTime is required");
            this.scheduledAction = java.util.Objects.requireNonNull(scheduledAction, "scheduledAction is required");
            this.description = description;
            this.launchExpirationTime = launchExpirationTime;
            this.recurrenceEndTime = recurrenceEndTime;
            this.recurrenceType = recurrenceType;
            this.recurrenceValue = recurrenceValue;
            this.scheduledTaskName = scheduledTaskName;
            this.taskEnabled = taskEnabled;
        }

        @Override
        public final java.lang.String getLaunchTime() {
            return this.launchTime;
        }

        @Override
        public final java.lang.String getScheduledAction() {
            return this.scheduledAction;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getLaunchExpirationTime() {
            return this.launchExpirationTime;
        }

        @Override
        public final java.lang.String getRecurrenceEndTime() {
            return this.recurrenceEndTime;
        }

        @Override
        public final java.lang.String getRecurrenceType() {
            return this.recurrenceType;
        }

        @Override
        public final java.lang.String getRecurrenceValue() {
            return this.recurrenceValue;
        }

        @Override
        public final java.lang.String getScheduledTaskName() {
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
