package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::ADInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.434Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosADInfoProps")
@software.amazon.jsii.Jsii.Proxy(RosADInfoProps.Jsii$Proxy.class)
public interface RosADInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAdAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAddns();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAdPassword();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAdServerIpAddress();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceId();

    /**
     * @return a {@link Builder} of {@link RosADInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosADInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosADInfoProps> {
        private java.lang.String adAccountName;
        private java.lang.String addns;
        private java.lang.String adPassword;
        private java.lang.String adServerIpAddress;
        private java.lang.String dbInstanceId;

        /**
         * Sets the value of {@link RosADInfoProps#getAdAccountName}
         * @param adAccountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder adAccountName(java.lang.String adAccountName) {
            this.adAccountName = adAccountName;
            return this;
        }

        /**
         * Sets the value of {@link RosADInfoProps#getAddns}
         * @param addns the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder addns(java.lang.String addns) {
            this.addns = addns;
            return this;
        }

        /**
         * Sets the value of {@link RosADInfoProps#getAdPassword}
         * @param adPassword the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder adPassword(java.lang.String adPassword) {
            this.adPassword = adPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosADInfoProps#getAdServerIpAddress}
         * @param adServerIpAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder adServerIpAddress(java.lang.String adServerIpAddress) {
            this.adServerIpAddress = adServerIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosADInfoProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosADInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosADInfoProps build() {
            return new Jsii$Proxy(adAccountName, addns, adPassword, adServerIpAddress, dbInstanceId);
        }
    }

    /**
     * An implementation for {@link RosADInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosADInfoProps {
        private final java.lang.String adAccountName;
        private final java.lang.String addns;
        private final java.lang.String adPassword;
        private final java.lang.String adServerIpAddress;
        private final java.lang.String dbInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.adAccountName = software.amazon.jsii.Kernel.get(this, "adAccountName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.addns = software.amazon.jsii.Kernel.get(this, "addns", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.adPassword = software.amazon.jsii.Kernel.get(this, "adPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.adServerIpAddress = software.amazon.jsii.Kernel.get(this, "adServerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String adAccountName, final java.lang.String addns, final java.lang.String adPassword, final java.lang.String adServerIpAddress, final java.lang.String dbInstanceId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.adAccountName = java.util.Objects.requireNonNull(adAccountName, "adAccountName is required");
            this.addns = java.util.Objects.requireNonNull(addns, "addns is required");
            this.adPassword = java.util.Objects.requireNonNull(adPassword, "adPassword is required");
            this.adServerIpAddress = java.util.Objects.requireNonNull(adServerIpAddress, "adServerIpAddress is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(dbInstanceId, "dbInstanceId is required");
        }

        @Override
        public final java.lang.String getAdAccountName() {
            return this.adAccountName;
        }

        @Override
        public final java.lang.String getAddns() {
            return this.addns;
        }

        @Override
        public final java.lang.String getAdPassword() {
            return this.adPassword;
        }

        @Override
        public final java.lang.String getAdServerIpAddress() {
            return this.adServerIpAddress;
        }

        @Override
        public final java.lang.String getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("adAccountName", om.valueToTree(this.getAdAccountName()));
            data.set("addns", om.valueToTree(this.getAddns()));
            data.set("adPassword", om.valueToTree(this.getAdPassword()));
            data.set("adServerIpAddress", om.valueToTree(this.getAdServerIpAddress()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosADInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosADInfoProps.Jsii$Proxy that = (RosADInfoProps.Jsii$Proxy) o;

            if (!adAccountName.equals(that.adAccountName)) return false;
            if (!addns.equals(that.addns)) return false;
            if (!adPassword.equals(that.adPassword)) return false;
            if (!adServerIpAddress.equals(that.adServerIpAddress)) return false;
            return this.dbInstanceId.equals(that.dbInstanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.adAccountName.hashCode();
            result = 31 * result + (this.addns.hashCode());
            result = 31 * result + (this.adPassword.hashCode());
            result = 31 * result + (this.adServerIpAddress.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            return result;
        }
    }
}
