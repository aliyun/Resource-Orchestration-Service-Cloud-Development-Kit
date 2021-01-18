package com.aliyun.ros.cdk.assembly.schema;

/**
 * Query input for looking up a VPC.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.16.0 (build 99a3413)", date = "2021-01-13T06:16:13.482Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.VpcContextQuery")
@software.amazon.jsii.Jsii.Proxy(VpcContextQuery.Jsii$Proxy.class)
public interface VpcContextQuery extends software.amazon.jsii.JsiiSerializable {

    /**
     * Query account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * Filters to apply to the VPC.
     * <p>
     * Filter parameters are the same as passed to DescribeVpcs.
     */
    @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.String> getFilter();

    /**
     * Query region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getReturnAsymmetricSubnets() {
        return null;
    }

    /**
     * Optional tag for subnet group name.
     * <p>
     * If not provided, we'll look at the ros-cdk:subnet-name tag.
     * If the subnet does not have the specified tag,
     * we'll use its type as the name.
     * <p>
     * Default: 'ros-cdk:subnet-name'
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSubnetGroupNameTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcContextQuery}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcContextQuery}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcContextQuery> {
        private java.lang.String account;
        private java.util.Map<java.lang.String, java.lang.String> filter;
        private java.lang.String region;
        private java.lang.Boolean returnAsymmetricSubnets;
        private java.lang.String subnetGroupNameTag;

        /**
         * Sets the value of {@link VpcContextQuery#getAccount}
         * @param account Query account. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link VpcContextQuery#getFilter}
         * @param filter Filters to apply to the VPC. This parameter is required.
         *               Filter parameters are the same as passed to DescribeVpcs.
         * @return {@code this}
         */
        public Builder filter(java.util.Map<java.lang.String, java.lang.String> filter) {
            this.filter = filter;
            return this;
        }

        /**
         * Sets the value of {@link VpcContextQuery#getRegion}
         * @param region Query region. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link VpcContextQuery#getReturnAsymmetricSubnets}
         * @param returnAsymmetricSubnets Whether to populate the subnetGroups field of the {@link VpcContextResponse}, which contains potentially asymmetric subnet groups.
         * @return {@code this}
         */
        public Builder returnAsymmetricSubnets(java.lang.Boolean returnAsymmetricSubnets) {
            this.returnAsymmetricSubnets = returnAsymmetricSubnets;
            return this;
        }

        /**
         * Sets the value of {@link VpcContextQuery#getSubnetGroupNameTag}
         * @param subnetGroupNameTag Optional tag for subnet group name.
         *                           If not provided, we'll look at the ros-cdk:subnet-name tag.
         *                           If the subnet does not have the specified tag,
         *                           we'll use its type as the name.
         * @return {@code this}
         */
        public Builder subnetGroupNameTag(java.lang.String subnetGroupNameTag) {
            this.subnetGroupNameTag = subnetGroupNameTag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcContextQuery}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcContextQuery build() {
            return new Jsii$Proxy(account, filter, region, returnAsymmetricSubnets, subnetGroupNameTag);
        }
    }

    /**
     * An implementation for {@link VpcContextQuery}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcContextQuery {
        private final java.lang.String account;
        private final java.util.Map<java.lang.String, java.lang.String> filter;
        private final java.lang.String region;
        private final java.lang.Boolean returnAsymmetricSubnets;
        private final java.lang.String subnetGroupNameTag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.filter = software.amazon.jsii.Kernel.get(this, "filter", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.returnAsymmetricSubnets = software.amazon.jsii.Kernel.get(this, "returnAsymmetricSubnets", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.subnetGroupNameTag = software.amazon.jsii.Kernel.get(this, "subnetGroupNameTag", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String account, final java.util.Map<java.lang.String, java.lang.String> filter, final java.lang.String region, final java.lang.Boolean returnAsymmetricSubnets, final java.lang.String subnetGroupNameTag) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(account, "account is required");
            this.filter = java.util.Objects.requireNonNull(filter, "filter is required");
            this.region = java.util.Objects.requireNonNull(region, "region is required");
            this.returnAsymmetricSubnets = returnAsymmetricSubnets;
            this.subnetGroupNameTag = subnetGroupNameTag;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getFilter() {
            return this.filter;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Boolean getReturnAsymmetricSubnets() {
            return this.returnAsymmetricSubnets;
        }

        @Override
        public final java.lang.String getSubnetGroupNameTag() {
            return this.subnetGroupNameTag;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("filter", om.valueToTree(this.getFilter()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getReturnAsymmetricSubnets() != null) {
                data.set("returnAsymmetricSubnets", om.valueToTree(this.getReturnAsymmetricSubnets()));
            }
            if (this.getSubnetGroupNameTag() != null) {
                data.set("subnetGroupNameTag", om.valueToTree(this.getSubnetGroupNameTag()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.VpcContextQuery"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcContextQuery.Jsii$Proxy that = (VpcContextQuery.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!filter.equals(that.filter)) return false;
            if (!region.equals(that.region)) return false;
            if (this.returnAsymmetricSubnets != null ? !this.returnAsymmetricSubnets.equals(that.returnAsymmetricSubnets) : that.returnAsymmetricSubnets != null) return false;
            return this.subnetGroupNameTag != null ? this.subnetGroupNameTag.equals(that.subnetGroupNameTag) : that.subnetGroupNameTag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.filter.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.returnAsymmetricSubnets != null ? this.returnAsymmetricSubnets.hashCode() : 0);
            result = 31 * result + (this.subnetGroupNameTag != null ? this.subnetGroupNameTag.hashCode() : 0);
            return result;
        }
    }
}
