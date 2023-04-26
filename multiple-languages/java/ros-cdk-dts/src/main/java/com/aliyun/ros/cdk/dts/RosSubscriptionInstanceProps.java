package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:18.988Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosSubscriptionInstanceProps.Jsii$Proxy.class)
public interface RosSubscriptionInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSubscriptionInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSubscriptionInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSubscriptionInstanceProps> {
        java.lang.Object configuration;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object sourceEndpointInstanceType;
        java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> tags;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getConfiguration}
         * @param configuration the value to be set.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getConfiguration}
         * @param configuration the value to be set.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(java.lang.String sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link RosSubscriptionInstanceProps#getUsedTime}
         * @param usedTime the value to be set.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSubscriptionInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSubscriptionInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSubscriptionInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSubscriptionInstanceProps {
        private final java.lang.Object configuration;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object sourceEndpointInstanceType;
        private final java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> tags;
        private final java.lang.Object usedTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceEndpointInstanceType = software.amazon.jsii.Kernel.get(this, "sourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty.class)));
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = builder.configuration;
            this.payType = builder.payType;
            this.period = builder.period;
            this.sourceEndpointInstanceType = builder.sourceEndpointInstanceType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty>)builder.tags;
            this.usedTime = builder.usedTime;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getSourceEndpointInstanceType() {
            return this.sourceEndpointInstanceType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUsedTime() {
            return this.usedTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getConfiguration() != null) {
                data.set("configuration", om.valueToTree(this.getConfiguration()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getSourceEndpointInstanceType() != null) {
                data.set("sourceEndpointInstanceType", om.valueToTree(this.getSourceEndpointInstanceType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSubscriptionInstanceProps.Jsii$Proxy that = (RosSubscriptionInstanceProps.Jsii$Proxy) o;

            if (this.configuration != null ? !this.configuration.equals(that.configuration) : that.configuration != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.sourceEndpointInstanceType != null ? !this.sourceEndpointInstanceType.equals(that.sourceEndpointInstanceType) : that.sourceEndpointInstanceType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration != null ? this.configuration.hashCode() : 0;
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
