package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::SiteMonitor`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:39.706Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosSiteMonitorProps")
@software.amazon.jsii.Jsii.Proxy(RosSiteMonitorProps.Jsii$Proxy.class)
public interface RosSiteMonitorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddress();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTaskType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlertIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIspCities() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptionsJson() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSiteMonitorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSiteMonitorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSiteMonitorProps> {
        java.lang.Object address;
        java.lang.Object taskName;
        java.lang.Object taskType;
        java.lang.Object alertIds;
        java.lang.Object interval;
        java.lang.Object ispCities;
        java.lang.Object optionsJson;

        /**
         * Sets the value of {@link RosSiteMonitorProps#getAddress}
         * @param address the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder address(java.lang.String address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getAddress}
         * @param address the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder address(com.aliyun.ros.cdk.core.IResolvable address) {
            this.address = address;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(java.lang.String taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getTaskName}
         * @param taskName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskName(com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.taskName = taskName;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getTaskType}
         * @param taskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskType(java.lang.String taskType) {
            this.taskType = taskType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getTaskType}
         * @param taskType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder taskType(com.aliyun.ros.cdk.core.IResolvable taskType) {
            this.taskType = taskType;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getAlertIds}
         * @param alertIds the value to be set.
         * @return {@code this}
         */
        public Builder alertIds(com.aliyun.ros.cdk.core.IResolvable alertIds) {
            this.alertIds = alertIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getAlertIds}
         * @param alertIds the value to be set.
         * @return {@code this}
         */
        public Builder alertIds(java.util.List<? extends java.lang.Object> alertIds) {
            this.alertIds = alertIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getInterval}
         * @param interval the value to be set.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getIspCities}
         * @param ispCities the value to be set.
         * @return {@code this}
         */
        public Builder ispCities(com.aliyun.ros.cdk.core.IResolvable ispCities) {
            this.ispCities = ispCities;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getIspCities}
         * @param ispCities the value to be set.
         * @return {@code this}
         */
        public Builder ispCities(java.util.List<? extends java.lang.Object> ispCities) {
            this.ispCities = ispCities;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getOptionsJson}
         * @param optionsJson the value to be set.
         * @return {@code this}
         */
        public Builder optionsJson(java.lang.String optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Sets the value of {@link RosSiteMonitorProps#getOptionsJson}
         * @param optionsJson the value to be set.
         * @return {@code this}
         */
        public Builder optionsJson(com.aliyun.ros.cdk.core.IResolvable optionsJson) {
            this.optionsJson = optionsJson;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSiteMonitorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSiteMonitorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSiteMonitorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSiteMonitorProps {
        private final java.lang.Object address;
        private final java.lang.Object taskName;
        private final java.lang.Object taskType;
        private final java.lang.Object alertIds;
        private final java.lang.Object interval;
        private final java.lang.Object ispCities;
        private final java.lang.Object optionsJson;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.address = software.amazon.jsii.Kernel.get(this, "address", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskName = software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.taskType = software.amazon.jsii.Kernel.get(this, "taskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alertIds = software.amazon.jsii.Kernel.get(this, "alertIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ispCities = software.amazon.jsii.Kernel.get(this, "ispCities", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.optionsJson = software.amazon.jsii.Kernel.get(this, "optionsJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.address = java.util.Objects.requireNonNull(builder.address, "address is required");
            this.taskName = java.util.Objects.requireNonNull(builder.taskName, "taskName is required");
            this.taskType = java.util.Objects.requireNonNull(builder.taskType, "taskType is required");
            this.alertIds = builder.alertIds;
            this.interval = builder.interval;
            this.ispCities = builder.ispCities;
            this.optionsJson = builder.optionsJson;
        }

        @Override
        public final java.lang.Object getAddress() {
            return this.address;
        }

        @Override
        public final java.lang.Object getTaskName() {
            return this.taskName;
        }

        @Override
        public final java.lang.Object getTaskType() {
            return this.taskType;
        }

        @Override
        public final java.lang.Object getAlertIds() {
            return this.alertIds;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getIspCities() {
            return this.ispCities;
        }

        @Override
        public final java.lang.Object getOptionsJson() {
            return this.optionsJson;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("address", om.valueToTree(this.getAddress()));
            data.set("taskName", om.valueToTree(this.getTaskName()));
            data.set("taskType", om.valueToTree(this.getTaskType()));
            if (this.getAlertIds() != null) {
                data.set("alertIds", om.valueToTree(this.getAlertIds()));
            }
            if (this.getInterval() != null) {
                data.set("interval", om.valueToTree(this.getInterval()));
            }
            if (this.getIspCities() != null) {
                data.set("ispCities", om.valueToTree(this.getIspCities()));
            }
            if (this.getOptionsJson() != null) {
                data.set("optionsJson", om.valueToTree(this.getOptionsJson()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosSiteMonitorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSiteMonitorProps.Jsii$Proxy that = (RosSiteMonitorProps.Jsii$Proxy) o;

            if (!address.equals(that.address)) return false;
            if (!taskName.equals(that.taskName)) return false;
            if (!taskType.equals(that.taskType)) return false;
            if (this.alertIds != null ? !this.alertIds.equals(that.alertIds) : that.alertIds != null) return false;
            if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
            if (this.ispCities != null ? !this.ispCities.equals(that.ispCities) : that.ispCities != null) return false;
            return this.optionsJson != null ? this.optionsJson.equals(that.optionsJson) : that.optionsJson == null;
        }

        @Override
        public final int hashCode() {
            int result = this.address.hashCode();
            result = 31 * result + (this.taskName.hashCode());
            result = 31 * result + (this.taskType.hashCode());
            result = 31 * result + (this.alertIds != null ? this.alertIds.hashCode() : 0);
            result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
            result = 31 * result + (this.ispCities != null ? this.ispCities.hashCode() : 0);
            result = 31 * result + (this.optionsJson != null ? this.optionsJson.hashCode() : 0);
            return result;
        }
    }
}
