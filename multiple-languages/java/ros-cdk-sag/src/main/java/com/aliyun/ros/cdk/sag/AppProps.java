package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>App</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:20.366Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.AppProps")
@software.amazon.jsii.Jsii.Proxy(AppProps.Jsii$Proxy.class)
public interface AppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.
     * <p>
     * Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoPay();

    /**
     * Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.
     * <p>
     * Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataPlan();

    /**
     * Property period: The subscription period of the SAG APP instance.
     * <p>
     * Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property userCount: The quota of client accounts for the SAG APP instance.
     * <p>
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserCount();

    /**
     * Property chargeType: The billing method of the SAG APP instance.
     * <p>
     * Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AppProps> {
        java.lang.Object autoPay;
        java.lang.Object dataPlan;
        java.lang.Object period;
        java.lang.Object userCount;
        java.lang.Object chargeType;

        /**
         * Sets the value of {@link AppProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. This parameter is required.
         *                Default value:
         *                false. Valid values:
         *                true: automatically pays the bills of SAG APP instances.
         *                false: does not automatically pay the bills of SAG APP instances.
         *                If you set the parameter to false, after you call this operation, go to Billing Management
         *                of the SAG console to complete the payment, the instance can be created.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. This parameter is required.
         *                Default value:
         *                false. Valid values:
         *                true: automatically pays the bills of SAG APP instances.
         *                false: does not automatically pay the bills of SAG APP instances.
         *                If you set the parameter to false, after you call this operation, go to Billing Management
         *                of the SAG console to complete the payment, the instance can be created.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDataPlan}
         * @param dataPlan Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month. This parameter is required.
         *                 Unit: GB. Set the value to 5.
         *                 Note The system allows each client account to use 5 GB traffic plan for free.
         * @return {@code this}
         */
        public Builder dataPlan(java.lang.Number dataPlan) {
            this.dataPlan = dataPlan;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getDataPlan}
         * @param dataPlan Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month. This parameter is required.
         *                 Unit: GB. Set the value to 5.
         *                 Note The system allows each client account to use 5 GB traffic plan for free.
         * @return {@code this}
         */
        public Builder dataPlan(com.aliyun.ros.cdk.core.IResolvable dataPlan) {
            this.dataPlan = dataPlan;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getPeriod}
         * @param period Property period: The subscription period of the SAG APP instance. This parameter is required.
         *               Unit: months.
         *               Valid values: 1~9, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getPeriod}
         * @param period Property period: The subscription period of the SAG APP instance. This parameter is required.
         *               Unit: months.
         *               Valid values: 1~9, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getUserCount}
         * @param userCount Property userCount: The quota of client accounts for the SAG APP instance. This parameter is required.
         *                  Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
         * @return {@code this}
         */
        public Builder userCount(java.lang.Number userCount) {
            this.userCount = userCount;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getUserCount}
         * @param userCount Property userCount: The quota of client accounts for the SAG APP instance. This parameter is required.
         *                  Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
         * @return {@code this}
         */
        public Builder userCount(com.aliyun.ros.cdk.core.IResolvable userCount) {
            this.userCount = userCount;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the SAG APP instance.
         *                   Set the value to PREPAY.
         *                   This value indicates that the SAG APP instance is a subscription resource.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link AppProps#getChargeType}
         * @param chargeType Property chargeType: The billing method of the SAG APP instance.
         *                   Set the value to PREPAY.
         *                   This value indicates that the SAG APP instance is a subscription resource.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.AppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AppProps.Jsii$Proxy that = (AppProps.Jsii$Proxy) o;

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
