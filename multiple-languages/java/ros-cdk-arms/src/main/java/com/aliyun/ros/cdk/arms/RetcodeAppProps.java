package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a `ALIYUN::ARMS::RetcodeApp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.425Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RetcodeAppProps")
@software.amazon.jsii.Jsii.Proxy(RetcodeAppProps.Jsii$Proxy.class)
public interface RetcodeAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property regionId: Region ID.
     * <p>
     * Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegionId();

    /**
     * Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetcodeAppName();

    /**
     * Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.
     * <p>
     * Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetcodeAppType();

    /**
     * @return a {@link Builder} of {@link RetcodeAppProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RetcodeAppProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RetcodeAppProps> {
        java.lang.Object regionId;
        java.lang.Object retcodeAppName;
        java.lang.Object retcodeAppType;

        /**
         * Sets the value of {@link RetcodeAppProps#getRegionId}
         * @param regionId Property regionId: Region ID. This parameter is required.
         *                 Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRegionId}
         * @param regionId Property regionId: Region ID. This parameter is required.
         *                 Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppName}
         * @param retcodeAppName Property retcodeAppName: The name of the application for which you want to create the browser monitoring job. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppName(java.lang.String retcodeAppName) {
            this.retcodeAppName = retcodeAppName;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppName}
         * @param retcodeAppName Property retcodeAppName: The name of the application for which you want to create the browser monitoring job. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppName(com.aliyun.ros.cdk.core.IResolvable retcodeAppName) {
            this.retcodeAppName = retcodeAppName;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppType}
         * @param retcodeAppType Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. This parameter is required.
         *                       Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
         * @return {@code this}
         */
        public Builder retcodeAppType(java.lang.String retcodeAppType) {
            this.retcodeAppType = retcodeAppType;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppType}
         * @param retcodeAppType Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. This parameter is required.
         *                       Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
         * @return {@code this}
         */
        public Builder retcodeAppType(com.aliyun.ros.cdk.core.IResolvable retcodeAppType) {
            this.retcodeAppType = retcodeAppType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RetcodeAppProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RetcodeAppProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RetcodeAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RetcodeAppProps {
        private final java.lang.Object regionId;
        private final java.lang.Object retcodeAppName;
        private final java.lang.Object retcodeAppType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retcodeAppName = software.amazon.jsii.Kernel.get(this, "retcodeAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retcodeAppType = software.amazon.jsii.Kernel.get(this, "retcodeAppType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regionId = java.util.Objects.requireNonNull(builder.regionId, "regionId is required");
            this.retcodeAppName = java.util.Objects.requireNonNull(builder.retcodeAppName, "retcodeAppName is required");
            this.retcodeAppType = java.util.Objects.requireNonNull(builder.retcodeAppType, "retcodeAppType is required");
        }

        @Override
        public final java.lang.Object getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.Object getRetcodeAppName() {
            return this.retcodeAppName;
        }

        @Override
        public final java.lang.Object getRetcodeAppType() {
            return this.retcodeAppType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("regionId", om.valueToTree(this.getRegionId()));
            data.set("retcodeAppName", om.valueToTree(this.getRetcodeAppName()));
            data.set("retcodeAppType", om.valueToTree(this.getRetcodeAppType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RetcodeAppProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RetcodeAppProps.Jsii$Proxy that = (RetcodeAppProps.Jsii$Proxy) o;

            if (!regionId.equals(that.regionId)) return false;
            if (!retcodeAppName.equals(that.retcodeAppName)) return false;
            return this.retcodeAppType.equals(that.retcodeAppType);
        }

        @Override
        public final int hashCode() {
            int result = this.regionId.hashCode();
            result = 31 * result + (this.retcodeAppName.hashCode());
            result = 31 * result + (this.retcodeAppType.hashCode());
            return result;
        }
    }
}
