package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::ADInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:12.264Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.ADInfoProps")
@software.amazon.jsii.Jsii.Proxy(ADInfoProps.Jsii$Proxy.class)
public interface ADInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property adAccountName: Domain account name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAdAccountName();

    /**
     * Property addns: Active directory domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAddns();

    /**
     * Property adPassword: Domain password.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAdPassword();

    /**
     * Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAdServerIpAddress();

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * @return a {@link Builder} of {@link ADInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ADInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ADInfoProps> {
        java.lang.Object adAccountName;
        java.lang.Object addns;
        java.lang.Object adPassword;
        java.lang.Object adServerIpAddress;
        java.lang.Object dbInstanceId;

        /**
         * Sets the value of {@link ADInfoProps#getAdAccountName}
         * @param adAccountName Property adAccountName: Domain account name. This parameter is required.
         * @return {@code this}
         */
        public Builder adAccountName(java.lang.String adAccountName) {
            this.adAccountName = adAccountName;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAdAccountName}
         * @param adAccountName Property adAccountName: Domain account name. This parameter is required.
         * @return {@code this}
         */
        public Builder adAccountName(com.aliyun.ros.cdk.core.IResolvable adAccountName) {
            this.adAccountName = adAccountName;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAddns}
         * @param addns Property addns: Active directory domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder addns(java.lang.String addns) {
            this.addns = addns;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAddns}
         * @param addns Property addns: Active directory domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder addns(com.aliyun.ros.cdk.core.IResolvable addns) {
            this.addns = addns;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAdPassword}
         * @param adPassword Property adPassword: Domain password. This parameter is required.
         * @return {@code this}
         */
        public Builder adPassword(java.lang.String adPassword) {
            this.adPassword = adPassword;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAdPassword}
         * @param adPassword Property adPassword: Domain password. This parameter is required.
         * @return {@code this}
         */
        public Builder adPassword(com.aliyun.ros.cdk.core.IResolvable adPassword) {
            this.adPassword = adPassword;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAdServerIpAddress}
         * @param adServerIpAddress Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS. This parameter is required.
         * @return {@code this}
         */
        public Builder adServerIpAddress(java.lang.String adServerIpAddress) {
            this.adServerIpAddress = adServerIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getAdServerIpAddress}
         * @param adServerIpAddress Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS. This parameter is required.
         * @return {@code this}
         */
        public Builder adServerIpAddress(com.aliyun.ros.cdk.core.IResolvable adServerIpAddress) {
            this.adServerIpAddress = adServerIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ADInfoProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ADInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ADInfoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ADInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ADInfoProps {
        private final java.lang.Object adAccountName;
        private final java.lang.Object addns;
        private final java.lang.Object adPassword;
        private final java.lang.Object adServerIpAddress;
        private final java.lang.Object dbInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.adAccountName = software.amazon.jsii.Kernel.get(this, "adAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addns = software.amazon.jsii.Kernel.get(this, "addns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.adPassword = software.amazon.jsii.Kernel.get(this, "adPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.adServerIpAddress = software.amazon.jsii.Kernel.get(this, "adServerIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.adAccountName = java.util.Objects.requireNonNull(builder.adAccountName, "adAccountName is required");
            this.addns = java.util.Objects.requireNonNull(builder.addns, "addns is required");
            this.adPassword = java.util.Objects.requireNonNull(builder.adPassword, "adPassword is required");
            this.adServerIpAddress = java.util.Objects.requireNonNull(builder.adServerIpAddress, "adServerIpAddress is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
        }

        @Override
        public final java.lang.Object getAdAccountName() {
            return this.adAccountName;
        }

        @Override
        public final java.lang.Object getAddns() {
            return this.addns;
        }

        @Override
        public final java.lang.Object getAdPassword() {
            return this.adPassword;
        }

        @Override
        public final java.lang.Object getAdServerIpAddress() {
            return this.adServerIpAddress;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.ADInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ADInfoProps.Jsii$Proxy that = (ADInfoProps.Jsii$Proxy) o;

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
