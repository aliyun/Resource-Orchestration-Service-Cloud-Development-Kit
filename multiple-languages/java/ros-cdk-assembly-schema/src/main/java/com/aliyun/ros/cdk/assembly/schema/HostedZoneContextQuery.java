package com.aliyun.ros.cdk.assembly.schema;

/**
 * Query to hosted zone context provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.16.0 (build 99a3413)", date = "2021-01-13T06:16:13.477Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery")
@software.amazon.jsii.Jsii.Proxy(HostedZoneContextQuery.Jsii$Proxy.class)
public interface HostedZoneContextQuery extends software.amazon.jsii.JsiiSerializable {

    /**
     * Query account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * The domain name e.g. example.com to lookup.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomainName();

    /**
     * Query region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * True if the zone you want to find is a private hosted zone.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPrivateZone() {
        return null;
    }

    /**
     * The VPC ID to that the private zone must be associated with.
     * <p>
     * If you provide VPC ID and privateZone is false, this will return no results
     * and raise an error.
     * <p>
     * Default: - Required if privateZone=true
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HostedZoneContextQuery}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HostedZoneContextQuery}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HostedZoneContextQuery> {
        private java.lang.String account;
        private java.lang.String domainName;
        private java.lang.String region;
        private java.lang.Boolean privateZone;
        private java.lang.String vpcId;

        /**
         * Sets the value of {@link HostedZoneContextQuery#getAccount}
         * @param account Query account. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link HostedZoneContextQuery#getDomainName}
         * @param domainName The domain name e.g. example.com to lookup. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link HostedZoneContextQuery#getRegion}
         * @param region Query region. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link HostedZoneContextQuery#getPrivateZone}
         * @param privateZone True if the zone you want to find is a private hosted zone.
         * @return {@code this}
         */
        public Builder privateZone(java.lang.Boolean privateZone) {
            this.privateZone = privateZone;
            return this;
        }

        /**
         * Sets the value of {@link HostedZoneContextQuery#getVpcId}
         * @param vpcId The VPC ID to that the private zone must be associated with.
         *              If you provide VPC ID and privateZone is false, this will return no results
         *              and raise an error.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HostedZoneContextQuery}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HostedZoneContextQuery build() {
            return new Jsii$Proxy(account, domainName, region, privateZone, vpcId);
        }
    }

    /**
     * An implementation for {@link HostedZoneContextQuery}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostedZoneContextQuery {
        private final java.lang.String account;
        private final java.lang.String domainName;
        private final java.lang.String region;
        private final java.lang.Boolean privateZone;
        private final java.lang.String vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateZone = software.amazon.jsii.Kernel.get(this, "privateZone", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String account, final java.lang.String domainName, final java.lang.String region, final java.lang.Boolean privateZone, final java.lang.String vpcId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(account, "account is required");
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.region = java.util.Objects.requireNonNull(region, "region is required");
            this.privateZone = privateZone;
            this.vpcId = vpcId;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.String getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Boolean getPrivateZone() {
            return this.privateZone;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getPrivateZone() != null) {
                data.set("privateZone", om.valueToTree(this.getPrivateZone()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HostedZoneContextQuery.Jsii$Proxy that = (HostedZoneContextQuery.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!domainName.equals(that.domainName)) return false;
            if (!region.equals(that.region)) return false;
            if (this.privateZone != null ? !this.privateZone.equals(that.privateZone) : that.privateZone != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.domainName.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.privateZone != null ? this.privateZone.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
