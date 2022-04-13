package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:14.383Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SubscriptionInstanceProps")
@software.amazon.jsii.Jsii.Proxy(SubscriptionInstanceProps.Jsii$Proxy.class)
public interface SubscriptionInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configuration: Subscription configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return null;
    }

    /**
     * Property payType: Payment type.
     * <p>
     * Valid value:
     * PostPaid: Pay-as-you-go, which is default value.
     * PrePaid: subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The unit of the subscription length.
     * <p>
     * Valid values: Year and Month.
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
     * <p>
     * PolarDB: PolarDB for MySQL cluster.
     * polardb_o: PolarDB O Edition cluster.
     * polardb_pg: PolarDB for PostgreSQL cluster.
     * DRDS: PolarDB-X instance V1.0 or V2.0.
     * PostgreSQL: self-managed PostgreSQL database.
     * Oracle: self-managed Oracle database.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointInstanceType() {
        return null;
    }

    /**
     * Property usedTime: The subscription length.
     * <p>
     * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
     * You can set the Period parameter to specify the unit of the subscription length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SubscriptionInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SubscriptionInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SubscriptionInstanceProps> {
        java.lang.Object configuration;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object sourceEndpointInstanceType;
        java.lang.Object usedTime;

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getConfiguration}
         * @param configuration Property configuration: Subscription configuration.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getConfiguration}
         * @param configuration Property configuration: Subscription configuration.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getPayType}
         * @param payType Property payType: Payment type.
         *                Valid value:
         *                PostPaid: Pay-as-you-go, which is default value.
         *                PrePaid: subscription.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getPayType}
         * @param payType Property payType: Payment type.
         *                Valid value:
         *                PostPaid: Pay-as-you-go, which is default value.
         *                PrePaid: subscription.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getPeriod}
         * @param period Property period: The unit of the subscription length.
         *               Valid values: Year and Month.
         *               Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getPeriod}
         * @param period Property period: The unit of the subscription length.
         *               Valid values: Year and Month.
         *               Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
         *                                   PolarDB: PolarDB for MySQL cluster.
         *                                   polardb_o: PolarDB O Edition cluster.
         *                                   polardb_pg: PolarDB for PostgreSQL cluster.
         *                                   DRDS: PolarDB-X instance V1.0 or V2.0.
         *                                   PostgreSQL: self-managed PostgreSQL database.
         *                                   Oracle: self-managed Oracle database.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(java.lang.String sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getSourceEndpointInstanceType}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
         *                                   PolarDB: PolarDB for MySQL cluster.
         *                                   polardb_o: PolarDB O Edition cluster.
         *                                   polardb_pg: PolarDB for PostgreSQL cluster.
         *                                   DRDS: PolarDB-X instance V1.0 or V2.0.
         *                                   PostgreSQL: self-managed PostgreSQL database.
         *                                   Oracle: self-managed Oracle database.
         * @return {@code this}
         */
        public Builder sourceEndpointInstanceType(com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.sourceEndpointInstanceType = sourceEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getUsedTime}
         * @param usedTime Property usedTime: The subscription length.
         *                 Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         *                 You can set the Period parameter to specify the unit of the subscription length.
         * @return {@code this}
         */
        public Builder usedTime(java.lang.Number usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Sets the value of {@link SubscriptionInstanceProps#getUsedTime}
         * @param usedTime Property usedTime: The subscription length.
         *                 Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         *                 You can set the Period parameter to specify the unit of the subscription length.
         * @return {@code this}
         */
        public Builder usedTime(com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.usedTime = usedTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SubscriptionInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SubscriptionInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SubscriptionInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionInstanceProps {
        private final java.lang.Object configuration;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object sourceEndpointInstanceType;
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
            this.usedTime = software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = builder.configuration;
            this.payType = builder.payType;
            this.period = builder.period;
            this.sourceEndpointInstanceType = builder.sourceEndpointInstanceType;
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
            if (this.getUsedTime() != null) {
                data.set("usedTime", om.valueToTree(this.getUsedTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.SubscriptionInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SubscriptionInstanceProps.Jsii$Proxy that = (SubscriptionInstanceProps.Jsii$Proxy) o;

            if (this.configuration != null ? !this.configuration.equals(that.configuration) : that.configuration != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.sourceEndpointInstanceType != null ? !this.sourceEndpointInstanceType.equals(that.sourceEndpointInstanceType) : that.sourceEndpointInstanceType != null) return false;
            return this.usedTime != null ? this.usedTime.equals(that.usedTime) : that.usedTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration != null ? this.configuration.hashCode() : 0;
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.sourceEndpointInstanceType != null ? this.sourceEndpointInstanceType.hashCode() : 0);
            result = 31 * result + (this.usedTime != null ? this.usedTime.hashCode() : 0);
            return result;
        }
    }
}
