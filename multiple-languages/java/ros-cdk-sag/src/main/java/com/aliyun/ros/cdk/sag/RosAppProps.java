package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>RosApp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.991Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosAppProps")
@software.amazon.jsii.Jsii.Proxy(RosAppProps.Jsii$Proxy.class)
public interface RosAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoPay();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataPlan();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserCount();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppProps> {
        java.lang.Object autoPay;
        java.lang.Object dataPlan;
        java.lang.Object period;
        java.lang.Object userCount;
        java.lang.Object chargeType;

        /**
         * Sets the value of {@link RosAppProps#getAutoPay}
         * @param autoPay the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getAutoPay}
         * @param autoPay the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getDataPlan}
         * @param dataPlan the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataPlan(java.lang.Number dataPlan) {
            this.dataPlan = dataPlan;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getDataPlan}
         * @param dataPlan the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataPlan(com.aliyun.ros.cdk.core.IResolvable dataPlan) {
            this.dataPlan = dataPlan;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getPeriod}
         * @param period the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getUserCount}
         * @param userCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userCount(java.lang.Number userCount) {
            this.userCount = userCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getUserCount}
         * @param userCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userCount(com.aliyun.ros.cdk.core.IResolvable userCount) {
            this.userCount = userCount;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosAppProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppProps {
        private final java.lang.Object autoPay;
        private final java.lang.Object dataPlan;
        private final java.lang.Object period;
        private final java.lang.Object userCount;
        private final java.lang.Object chargeType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataPlan = software.amazon.jsii.Kernel.get(this, "dataPlan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userCount = software.amazon.jsii.Kernel.get(this, "userCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoPay = java.util.Objects.requireNonNull(builder.autoPay, "autoPay is required");
            this.dataPlan = java.util.Objects.requireNonNull(builder.dataPlan, "dataPlan is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.userCount = java.util.Objects.requireNonNull(builder.userCount, "userCount is required");
            this.chargeType = builder.chargeType;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getDataPlan() {
            return this.dataPlan;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getUserCount() {
            return this.userCount;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("autoPay", om.valueToTree(this.getAutoPay()));
            data.set("dataPlan", om.valueToTree(this.getDataPlan()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("userCount", om.valueToTree(this.getUserCount()));
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppProps.Jsii$Proxy that = (RosAppProps.Jsii$Proxy) o;

            if (!autoPay.equals(that.autoPay)) return false;
            if (!dataPlan.equals(that.dataPlan)) return false;
            if (!period.equals(that.period)) return false;
            if (!userCount.equals(that.userCount)) return false;
            return this.chargeType != null ? this.chargeType.equals(that.chargeType) : that.chargeType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoPay.hashCode();
            result = 31 * result + (this.dataPlan.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.userCount.hashCode());
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            return result;
        }
    }
}
