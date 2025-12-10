package com.aliyun.ros.cdk.cloudsiem;

/**
 * Properties for defining a <code>RosUserSourceLogConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.572Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsiem.$Module.class, fqn = "@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosUserSourceLogConfigProps.Jsii$Proxy.class)
public interface RosUserSourceLogConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceLogInfo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceProdCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubUserId();

    /**
     * @return a {@link Builder} of {@link RosUserSourceLogConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserSourceLogConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserSourceLogConfigProps> {
        java.lang.Object sourceLogCode;
        java.lang.Object sourceLogInfo;
        java.lang.Object sourceProdCode;
        java.lang.Object subUserId;

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceLogCode}
         * @param sourceLogCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogCode(java.lang.String sourceLogCode) {
            this.sourceLogCode = sourceLogCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceLogCode}
         * @param sourceLogCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogCode(com.aliyun.ros.cdk.core.IResolvable sourceLogCode) {
            this.sourceLogCode = sourceLogCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceLogInfo}
         * @param sourceLogInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogInfo(com.aliyun.ros.cdk.core.IResolvable sourceLogInfo) {
            this.sourceLogInfo = sourceLogInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceLogInfo}
         * @param sourceLogInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceLogInfo(com.aliyun.ros.cdk.cloudsiem.RosUserSourceLogConfig.SourceLogInfoProperty sourceLogInfo) {
            this.sourceLogInfo = sourceLogInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceProdCode}
         * @param sourceProdCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceProdCode(java.lang.String sourceProdCode) {
            this.sourceProdCode = sourceProdCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSourceProdCode}
         * @param sourceProdCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceProdCode(com.aliyun.ros.cdk.core.IResolvable sourceProdCode) {
            this.sourceProdCode = sourceProdCode;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSubUserId}
         * @param subUserId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subUserId(java.lang.String subUserId) {
            this.subUserId = subUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserSourceLogConfigProps#getSubUserId}
         * @param subUserId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder subUserId(com.aliyun.ros.cdk.core.IResolvable subUserId) {
            this.subUserId = subUserId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserSourceLogConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserSourceLogConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserSourceLogConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserSourceLogConfigProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsiem.RosUserSourceLogConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserSourceLogConfigProps.Jsii$Proxy that = (RosUserSourceLogConfigProps.Jsii$Proxy) o;

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
