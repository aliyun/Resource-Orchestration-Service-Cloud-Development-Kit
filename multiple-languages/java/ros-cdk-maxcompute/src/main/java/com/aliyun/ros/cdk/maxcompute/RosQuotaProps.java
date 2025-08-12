package com.aliyun.ros.cdk.maxcompute;

/**
 * Properties for defining a <code>RosQuota</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosQuotaProps")
@software.amazon.jsii.Jsii.Proxy(RosQuotaProps.Jsii$Proxy.class)
public interface RosQuotaProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaNickname() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecification() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTunnel() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosQuotaProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosQuotaProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosQuotaProps> {
        java.lang.Object payType;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object cu;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object quotaNickname;
        java.lang.Object specification;
        java.lang.Object tunnel;

        /**
         * Sets the value of {@link RosQuotaProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getCu}
         * @param cu the value to be set.
         * @return {@code this}
         */
        public Builder cu(java.lang.Number cu) {
            this.cu = cu;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getCu}
         * @param cu the value to be set.
         * @return {@code this}
         */
        public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
            this.cu = cu;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getQuotaNickname}
         * @param quotaNickname the value to be set.
         * @return {@code this}
         */
        public Builder quotaNickname(java.lang.String quotaNickname) {
            this.quotaNickname = quotaNickname;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getQuotaNickname}
         * @param quotaNickname the value to be set.
         * @return {@code this}
         */
        public Builder quotaNickname(com.aliyun.ros.cdk.core.IResolvable quotaNickname) {
            this.quotaNickname = quotaNickname;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getSpecification}
         * @param specification the value to be set.
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getSpecification}
         * @param specification the value to be set.
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getTunnel}
         * @param tunnel the value to be set.
         * @return {@code this}
         */
        public Builder tunnel(java.lang.Number tunnel) {
            this.tunnel = tunnel;
            return this;
        }

        /**
         * Sets the value of {@link RosQuotaProps#getTunnel}
         * @param tunnel the value to be set.
         * @return {@code this}
         */
        public Builder tunnel(com.aliyun.ros.cdk.core.IResolvable tunnel) {
            this.tunnel = tunnel;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosQuotaProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosQuotaProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosQuotaProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosQuotaProps {
        private final java.lang.Object payType;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object cu;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object quotaNickname;
        private final java.lang.Object specification;
        private final java.lang.Object tunnel;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaNickname = software.amazon.jsii.Kernel.get(this, "quotaNickname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tunnel = software.amazon.jsii.Kernel.get(this, "tunnel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.cu = builder.cu;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.quotaNickname = builder.quotaNickname;
            this.specification = builder.specification;
            this.tunnel = builder.tunnel;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getCu() {
            return this.cu;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getQuotaNickname() {
            return this.quotaNickname;
        }

        @Override
        public final java.lang.Object getSpecification() {
            return this.specification;
        }

        @Override
        public final java.lang.Object getTunnel() {
            return this.tunnel;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getCu() != null) {
                data.set("cu", om.valueToTree(this.getCu()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getQuotaNickname() != null) {
                data.set("quotaNickname", om.valueToTree(this.getQuotaNickname()));
            }
            if (this.getSpecification() != null) {
                data.set("specification", om.valueToTree(this.getSpecification()));
            }
            if (this.getTunnel() != null) {
                data.set("tunnel", om.valueToTree(this.getTunnel()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RosQuotaProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosQuotaProps.Jsii$Proxy that = (RosQuotaProps.Jsii$Proxy) o;

            if (!payType.equals(that.payType)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.cu != null ? !this.cu.equals(that.cu) : that.cu != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.quotaNickname != null ? !this.quotaNickname.equals(that.quotaNickname) : that.quotaNickname != null) return false;
            if (this.specification != null ? !this.specification.equals(that.specification) : that.specification != null) return false;
            return this.tunnel != null ? this.tunnel.equals(that.tunnel) : that.tunnel == null;
        }

        @Override
        public final int hashCode() {
            int result = this.payType.hashCode();
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.cu != null ? this.cu.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.quotaNickname != null ? this.quotaNickname.hashCode() : 0);
            result = 31 * result + (this.specification != null ? this.specification.hashCode() : 0);
            result = 31 * result + (this.tunnel != null ? this.tunnel.hashCode() : 0);
            return result;
        }
    }
}
