package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a `ALIYUN::ARMS::RetcodeApp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.170Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RetcodeAppProps")
@software.amazon.jsii.Jsii.Proxy(RetcodeAppProps.Jsii$Proxy.class)
public interface RetcodeAppProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRetcodeAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRetcodeAppType();

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
        private java.lang.String regionId;
        private java.lang.String retcodeAppName;
        private java.lang.String retcodeAppType;

        /**
         * Sets the value of {@link RetcodeAppProps#getRegionId}
         * @param regionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppName}
         * @param retcodeAppName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppName(java.lang.String retcodeAppName) {
            this.retcodeAppName = retcodeAppName;
            return this;
        }

        /**
         * Sets the value of {@link RetcodeAppProps#getRetcodeAppType}
         * @param retcodeAppType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retcodeAppType(java.lang.String retcodeAppType) {
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
            return new Jsii$Proxy(regionId, retcodeAppName, retcodeAppType);
        }
    }

    /**
     * An implementation for {@link RetcodeAppProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RetcodeAppProps {
        private final java.lang.String regionId;
        private final java.lang.String retcodeAppName;
        private final java.lang.String retcodeAppType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.retcodeAppName = software.amazon.jsii.Kernel.get(this, "retcodeAppName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.retcodeAppType = software.amazon.jsii.Kernel.get(this, "retcodeAppType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String regionId, final java.lang.String retcodeAppName, final java.lang.String retcodeAppType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regionId = java.util.Objects.requireNonNull(regionId, "regionId is required");
            this.retcodeAppName = java.util.Objects.requireNonNull(retcodeAppName, "retcodeAppName is required");
            this.retcodeAppType = java.util.Objects.requireNonNull(retcodeAppType, "retcodeAppType is required");
        }

        @Override
        public final java.lang.String getRegionId() {
            return this.regionId;
        }

        @Override
        public final java.lang.String getRetcodeAppName() {
            return this.retcodeAppName;
        }

        @Override
        public final java.lang.String getRetcodeAppType() {
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
