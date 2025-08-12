package com.aliyun.ros.cdk.cloudsiem;

/**
 * Properties for defining a <code>UserSourceLogConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.UserSourceLogConfigProps")
@software.amazon.jsii.Jsii.Proxy(UserSourceLogConfigProps.Jsii$Proxy.class)
public interface UserSourceLogConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property sourceLogCode: The source log code.
     * <p>
     * For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogCode();

    /**
     * Property sourceLogInfo: The info of log to be added.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogInfo();

    /**
     * Property sourceProdCode: The product code.
     * <p>
     * For all available product codes, query the Cloud Siem ListAllProds API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceProdCode();

    /**
     * Property subUserId: The Id of the account to be submitted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubUserId();

    /**
     * @return a {@link Builder} of {@link UserSourceLogConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserSourceLogConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserSourceLogConfigProps> {
        java.lang.Object sourceLogCode;
        java.lang.Object sourceLogInfo;
        java.lang.Object sourceProdCode;
        java.lang.Object subUserId;

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceLogCode}
         * @param sourceLogCode Property sourceLogCode: The source log code. This parameter is required.
         *                      For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * @return {@code this}
         */
        public Builder sourceLogCode(java.lang.String sourceLogCode) {
            this.sourceLogCode = sourceLogCode;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceLogCode}
         * @param sourceLogCode Property sourceLogCode: The source log code. This parameter is required.
         *                      For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
         * @return {@code this}
         */
        public Builder sourceLogCode(com.aliyun.ros.cdk.core.IResolvable sourceLogCode) {
            this.sourceLogCode = sourceLogCode;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceLogInfo}
         * @param sourceLogInfo Property sourceLogInfo: The info of log to be added. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogInfo(com.aliyun.ros.cdk.core.IResolvable sourceLogInfo) {
            this.sourceLogInfo = sourceLogInfo;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceLogInfo}
         * @param sourceLogInfo Property sourceLogInfo: The info of log to be added. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogInfo(com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty sourceLogInfo) {
            this.sourceLogInfo = sourceLogInfo;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceProdCode}
         * @param sourceProdCode Property sourceProdCode: The product code. This parameter is required.
         *                       For all available product codes, query the Cloud Siem ListAllProds API.
         * @return {@code this}
         */
        public Builder sourceProdCode(java.lang.String sourceProdCode) {
            this.sourceProdCode = sourceProdCode;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSourceProdCode}
         * @param sourceProdCode Property sourceProdCode: The product code. This parameter is required.
         *                       For all available product codes, query the Cloud Siem ListAllProds API.
         * @return {@code this}
         */
        public Builder sourceProdCode(com.aliyun.ros.cdk.core.IResolvable sourceProdCode) {
            this.sourceProdCode = sourceProdCode;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSubUserId}
         * @param subUserId Property subUserId: The Id of the account to be submitted. This parameter is required.
         * @return {@code this}
         */
        public Builder subUserId(java.lang.String subUserId) {
            this.subUserId = subUserId;
            return this;
        }

        /**
         * Sets the value of {@link UserSourceLogConfigProps#getSubUserId}
         * @param subUserId Property subUserId: The Id of the account to be submitted. This parameter is required.
         * @return {@code this}
         */
        public Builder subUserId(com.aliyun.ros.cdk.core.IResolvable subUserId) {
            this.subUserId = subUserId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserSourceLogConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserSourceLogConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserSourceLogConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserSourceLogConfigProps {
        private final java.lang.Object sourceLogCode;
        private final java.lang.Object sourceLogInfo;
        private final java.lang.Object sourceProdCode;
        private final java.lang.Object subUserId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sourceLogCode = software.amazon.jsii.Kernel.get(this, "sourceLogCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceLogInfo = software.amazon.jsii.Kernel.get(this, "sourceLogInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceProdCode = software.amazon.jsii.Kernel.get(this, "sourceProdCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subUserId = software.amazon.jsii.Kernel.get(this, "subUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sourceLogCode = java.util.Objects.requireNonNull(builder.sourceLogCode, "sourceLogCode is required");
            this.sourceLogInfo = java.util.Objects.requireNonNull(builder.sourceLogInfo, "sourceLogInfo is required");
            this.sourceProdCode = java.util.Objects.requireNonNull(builder.sourceProdCode, "sourceProdCode is required");
            this.subUserId = java.util.Objects.requireNonNull(builder.subUserId, "subUserId is required");
        }

        @Override
        public final java.lang.Object getSourceLogCode() {
            return this.sourceLogCode;
        }

        @Override
        public final java.lang.Object getSourceLogInfo() {
            return this.sourceLogInfo;
        }

        @Override
        public final java.lang.Object getSourceProdCode() {
            return this.sourceProdCode;
        }

        @Override
        public final java.lang.Object getSubUserId() {
            return this.subUserId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("sourceLogCode", om.valueToTree(this.getSourceLogCode()));
            data.set("sourceLogInfo", om.valueToTree(this.getSourceLogInfo()));
            data.set("sourceProdCode", om.valueToTree(this.getSourceProdCode()));
            data.set("subUserId", om.valueToTree(this.getSubUserId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsiem.UserSourceLogConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserSourceLogConfigProps.Jsii$Proxy that = (UserSourceLogConfigProps.Jsii$Proxy) o;

            if (!sourceLogCode.equals(that.sourceLogCode)) return false;
            if (!sourceLogInfo.equals(that.sourceLogInfo)) return false;
            if (!sourceProdCode.equals(that.sourceProdCode)) return false;
            return this.subUserId.equals(that.subUserId);
        }

        @Override
        public final int hashCode() {
            int result = this.sourceLogCode.hashCode();
            result = 31 * result + (this.sourceLogInfo.hashCode());
            result = 31 * result + (this.sourceProdCode.hashCode());
            result = 31 * result + (this.subUserId.hashCode());
            return result;
        }
    }
}
