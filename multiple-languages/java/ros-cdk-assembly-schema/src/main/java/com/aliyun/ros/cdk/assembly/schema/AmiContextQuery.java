package com.aliyun.ros.cdk.assembly.schema;

/**
 * Query to AMI context provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.187Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.AmiContextQuery")
@software.amazon.jsii.Jsii.Proxy(AmiContextQuery.Jsii$Proxy.class)
public interface AmiContextQuery extends software.amazon.jsii.JsiiSerializable {

    /**
     * Account to query.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * Filters to DescribeImages call.
     */
    @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.util.List<java.lang.String>> getFilters();

    /**
     * Region to query.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * Owners to DescribeImages call.
     * <p>
     * Default: - All owners
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getOwners() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AmiContextQuery}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AmiContextQuery}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AmiContextQuery> {
        java.lang.String account;
        java.util.Map<java.lang.String, java.util.List<java.lang.String>> filters;
        java.lang.String region;
        java.util.List<java.lang.String> owners;

        /**
         * Sets the value of {@link AmiContextQuery#getAccount}
         * @param account Account to query. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link AmiContextQuery#getFilters}
         * @param filters Filters to DescribeImages call. This parameter is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder filters(java.util.Map<java.lang.String, ? extends java.util.List<java.lang.String>> filters) {
            this.filters = (java.util.Map<java.lang.String, java.util.List<java.lang.String>>)filters;
            return this;
        }

        /**
         * Sets the value of {@link AmiContextQuery#getRegion}
         * @param region Region to query. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link AmiContextQuery#getOwners}
         * @param owners Owners to DescribeImages call.
         * @return {@code this}
         */
        public Builder owners(java.util.List<java.lang.String> owners) {
            this.owners = owners;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AmiContextQuery}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AmiContextQuery build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AmiContextQuery}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AmiContextQuery {
        private final java.lang.String account;
        private final java.util.Map<java.lang.String, java.util.List<java.lang.String>> filters;
        private final java.lang.String region;
        private final java.util.List<java.lang.String> owners;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.filters = software.amazon.jsii.Kernel.get(this, "filters", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class))));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.owners = software.amazon.jsii.Kernel.get(this, "owners", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.filters = (java.util.Map<java.lang.String, java.util.List<java.lang.String>>)java.util.Objects.requireNonNull(builder.filters, "filters is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.owners = builder.owners;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.util.Map<java.lang.String, java.util.List<java.lang.String>> getFilters() {
            return this.filters;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.util.List<java.lang.String> getOwners() {
            return this.owners;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("filters", om.valueToTree(this.getFilters()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getOwners() != null) {
                data.set("owners", om.valueToTree(this.getOwners()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.AmiContextQuery"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AmiContextQuery.Jsii$Proxy that = (AmiContextQuery.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!filters.equals(that.filters)) return false;
            if (!region.equals(that.region)) return false;
            return this.owners != null ? this.owners.equals(that.owners) : that.owners == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.filters.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.owners != null ? this.owners.hashCode() : 0);
            return result;
        }
    }
}
