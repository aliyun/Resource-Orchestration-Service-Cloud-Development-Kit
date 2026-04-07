package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>RecoveryPlan</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.960Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RecoveryPlanProps")
@software.amazon.jsii.Jsii.Proxy(RecoveryPlanProps.Jsii$Proxy.class)
public interface RecoveryPlanProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property faultAddrPool: The fault address pool of the recovery plan.
     * <p>
     * The value must be encoded in UTF-8.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFaultAddrPool();

    /**
     * Property name: The name of the recovery plan.
     * <p>
     * The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property lang: The language of the request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return null;
    }

    /**
     * Property remark: The remark of the recovery plan.
     * <p>
     * The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RecoveryPlanProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RecoveryPlanProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RecoveryPlanProps> {
        java.lang.Object faultAddrPool;
        java.lang.Object name;
        java.lang.Object lang;
        java.lang.Object remark;

        /**
         * Sets the value of {@link RecoveryPlanProps#getFaultAddrPool}
         * @param faultAddrPool Property faultAddrPool: The fault address pool of the recovery plan. This parameter is required.
         *                      The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder faultAddrPool(com.aliyun.ros.cdk.core.IResolvable faultAddrPool) {
            this.faultAddrPool = faultAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getFaultAddrPool}
         * @param faultAddrPool Property faultAddrPool: The fault address pool of the recovery plan. This parameter is required.
         *                      The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder faultAddrPool(java.util.List<? extends java.lang.Object> faultAddrPool) {
            this.faultAddrPool = faultAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getName}
         * @param name Property name: The name of the recovery plan. This parameter is required.
         *             The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getName}
         * @param name Property name: The name of the recovery plan. This parameter is required.
         *             The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getLang}
         * @param lang Property lang: The language of the request.
         * @return {@code this}
         */
        public Builder lang(java.lang.String lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getLang}
         * @param lang Property lang: The language of the request.
         * @return {@code this}
         */
        public Builder lang(com.aliyun.ros.cdk.core.IResolvable lang) {
            this.lang = lang;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getRemark}
         * @param remark Property remark: The remark of the recovery plan.
         *               The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RecoveryPlanProps#getRemark}
         * @param remark Property remark: The remark of the recovery plan.
         *               The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RecoveryPlanProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RecoveryPlanProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RecoveryPlanProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RecoveryPlanProps {
        private final java.lang.Object faultAddrPool;
        private final java.lang.Object name;
        private final java.lang.Object lang;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.faultAddrPool = software.amazon.jsii.Kernel.get(this, "faultAddrPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lang = software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.faultAddrPool = java.util.Objects.requireNonNull(builder.faultAddrPool, "faultAddrPool is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.lang = builder.lang;
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getFaultAddrPool() {
            return this.faultAddrPool;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getLang() {
            return this.lang;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("faultAddrPool", om.valueToTree(this.getFaultAddrPool()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getLang() != null) {
                data.set("lang", om.valueToTree(this.getLang()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RecoveryPlanProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RecoveryPlanProps.Jsii$Proxy that = (RecoveryPlanProps.Jsii$Proxy) o;

            if (!faultAddrPool.equals(that.faultAddrPool)) return false;
            if (!name.equals(that.name)) return false;
            if (this.lang != null ? !this.lang.equals(that.lang) : that.lang != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.faultAddrPool.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.lang != null ? this.lang.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
